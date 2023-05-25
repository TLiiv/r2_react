import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList (props){
    return (
        <ul className='expenses-list'>
         {props.filteredExpenses.length === 0 && <h2 className="expenses-list__fallback">Found no expenses.</h2>} 
        {props.filteredExpenses.length > 0 &&
        props.filteredExpenses.map((item) => (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        ))}
        </ul>
    )
}

export default ExpensesList;