const expenseDate=new Date()
    const expenseTitle="wine expenses"
    const month = expenseDate.toLocaleString('en-US', { month: 'long' });
  const day = expenseDate.toLocaleString('en-US', { day: '2-digit' });
  const year = expenseDate.getFullYear();
const expenseAmount=240000

const expenses=[
  {
    expenseTitle:"Sports expenses",
   
    month:month,
    day:day,
    year:year,
    expenseAmount:200
  }
  , {
    expenseTitle:"HouseHold expenses",
   
    month:month,
    day:day,
    year:year,
    expenseAmount:20000
  },
   {
    expenseTitle:"Transportation expenses",
   
    month:month,
    day:day,
    year:year,
    expenseAmount:500
  }
]

let expense={
     expenseTitle:"School expenses",
   
    month:month,
    day:day,
    year:year,
    expenseAmount:6000
}
let expense1={
     expenseTitle:"Tuition expenses",
   
    month:month,
    day:day,
    year:year,
    expenseAmount:2000
}
expenses.push(expense)
expenses.push(expense1)



export default expenses