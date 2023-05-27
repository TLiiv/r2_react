import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const expensesFilterHandler = (year) => {
        setFilteredYear(year);
        console.log(filteredYear);
    }

    const filteredExpenses = props.items.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear
    });



    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onFilterChange={expensesFilterHandler}
                    selected={filteredYear}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList filteredExpenses={filteredExpenses} />

            </Card>
        </div>
    )
}

export default Expenses;