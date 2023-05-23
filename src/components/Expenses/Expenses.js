import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

function Expenses (props) {
const [filteredYear,setFilteredYear] = useState('2020');

const expensesFilterHandler = (year) => {
    setFilteredYear(year);
    console.log(filteredYear);
}

const filteredExpenses = props.items.filter((item)=>{
    return item.date.getFullYear().toString() === filteredYear});

 

    console.log(filteredExpenses);

    return( 
        <Card className="expenses">
        <ExpensesFilter 
        onFilterChange={expensesFilterHandler}
        selected={filteredYear}
        />
        
            {filteredExpenses.map((item) => (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </Card>
        
    )
}

export default Expenses;