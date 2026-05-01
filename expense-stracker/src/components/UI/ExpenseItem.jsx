import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import TotalExpenses from "./TotalExpenses/TotalExpenses";
import ExpenseDescription from "./ExpenseDescription";
import { useState } from 'react';
import { Expense_API_URL } from "../../Api.js";

function ExpenseItem({ expenses, refreshData }) {
    const [edit, setEdit] = useState(null);
    
    // State to hold the user's selected year and month for filtering
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');

    const handleDeleteExpense = (id) => {
        const token = localStorage.getItem("token");

        fetch(`${Expense_API_URL}/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message);
                refreshData(); 
            })
            .catch(err => console.log(err));
    };

    const handleEdit = (expense) => {
        setEdit(expense);
    };

    const handleForm = (id) => {
        const token = localStorage.getItem("token");

        fetch(`${Expense_API_URL}/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(edit)
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message);
                refreshData(); 
                setEdit(null); 
            })
            .catch(err => console.log(err));
    };

    // Extract unique years from the expense data to populate the filter dropdown
    const availableYears = [...new Set(expenses.map(exp => new Date(exp.date).getFullYear()))].sort((a, b) => b - a);

    // Logic to filter the array: keeps only items that match the selected year and month
    const filteredExpenses = expenses.filter(expense => {
        const expenseDate = new Date(expense.date);
        const expenseYear = expenseDate.getFullYear().toString();
        // Month is 0-indexed in JS (Jan=0, June=5), so we add 1 and pad to match "06"
        const expenseMonth = (expenseDate.getMonth() + 1).toString().padStart(2, '0');

        const yearMatches = selectedYear === '' || expenseYear === selectedYear;
        const monthMatches = selectedMonth === '' || expenseMonth === selectedMonth;

        return yearMatches && monthMatches;
    });

    return (
        <div className='container my-4'>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    
                    {/* Filter UI: Provides the dropdowns for the user to select dates */}
                    <div className="card p-3 mb-4 bg-light border-0 shadow-sm">
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label className="form-label fw-bold">Filter by Year</label>
                                <select 
                                    className="form-select" 
                                    value={selectedYear} 
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                >
                                    <option value="">All Years</option>
                                    {availableYears.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fw-bold">Filter by Month</label>
                                <select 
                                    className="form-select" 
                                    value={selectedMonth} 
                                    onChange={(e) => setSelectedMonth(e.target.value)}
                                >
                                    <option value="">All Months</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Renders the list using the filteredExpenses array instead of the original one */}
                    <div className="list-group mb-4">
                        {filteredExpenses.map((expense) => (
                            <div className='list-group-item list-group-item-action d-flex align-items-center justify-content-between p-3' key={expense._id}>
                                <div className="d-flex align-items-center gap-3">
                                    <ExpenseDate date={expense.date} />
                                    <ExpenseDescription title={expense.title} amount={expense.amount} />
                                </div>
                                <div className="btn-group">
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => { handleDeleteExpense(expense._id) }}>
                                        <i className="bi bi-trash"></i> Delete
                                    </button>
                                    <button className="btn btn-outline-primary btn-sm" onClick={() => { handleEdit(expense) }}>
                                        <i className="bi bi-pencil"></i> Update
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredExpenses.length === 0 && <h2 className="text-center text-muted mt-5">No Items Found</h2>}

                    {/* Edit Form remains the same */}
                    {edit && (
                        <div className="card shadow-sm mb-4">
                            <div className="card-header bg-primary text-white">
                                <h5 className="mb-0">Edit Expense</h5>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={edit.title}
                                        onChange={(e) => { setEdit({ ...edit, title: e.target.value }) }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Amount</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={edit.amount}
                                        onChange={(e) => { setEdit({ ...edit, amount: e.target.value }) }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={edit.date}
                                        onChange={(e) => { setEdit({ ...edit, date: e.target.value }) }}
                                    />
                                </div>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-success flex-grow-1" onClick={() => handleForm(edit._id)}>Save Changes</button>
                                    <button className="btn btn-secondary" onClick={() => setEdit(null)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Passes only the filtered results to update the total calculation */}
                    <div className="mt-4">
                        <TotalExpenses expenses={filteredExpenses} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;