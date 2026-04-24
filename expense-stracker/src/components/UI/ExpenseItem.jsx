import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import TotalExpenses from "./TotalExpenses/TotalExpenses"
import ExpenseDescription from "./ExpenseDescription"
import { useState, useEffect } from 'react';
import { Expense_API_URL } from "../../Api.js"

function ExpenseItem() {
    const [expenses, setExpenses] = useState([])
    const [edit, setEdit] = useState(null)

    const getExpenses = () => {
        fetch(`${Expense_API_URL}/getExpenses`)
            .then(res => res.json())
            .then(data => {
                const newFirst = [...data].reverse()
                setExpenses(newFirst)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getExpenses()
    }, [])

    const handleDeleteExpense = (id) => {
        fetch(`${Expense_API_URL}/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message + data.deleteExpense)
                getExpenses();
            })
            .catch(err => console.log(err))
    }

    const handleEdit = (expense) => {
        setEdit(expense)
    }

    const handleForm = (id) => {
        fetch(`${Expense_API_URL}/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(edit)
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message)
                getExpenses()
            })
        setEdit(null)
    }

    return (
        <div className='container my-4'>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {/* Expense List */}
                    <div className="list-group mb-4">
                        {expenses.map((expense) => (
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

                    {/* Empty State */}
                    {expenses.length === 0 && <h2 className="text-center text-muted mt-5">No Items Found</h2>}

                    {/* Edit Form Modal/Section */}
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

                    <div className="mt-4">
                        <TotalExpenses expenses={expenses} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;