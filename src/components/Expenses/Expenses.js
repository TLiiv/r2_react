import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

function Expenses (props) {
const [filteredYear,setFilteredYear] = useState('2021');
const expensesFilterHandler = (year) => {
    setFilteredYear(year);
    console.log(filteredYear);
}
    return( 
        <Card className="expenses">
        <ExpensesFilter 
        onFilterChange={expensesFilterHandler}
        selected={filteredYear}
        />
            {props.items.map((item) => (
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