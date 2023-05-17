import './ExpenseItem.css';


function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>date</div>
            <div className="expense-item__description">
                <h2>Item</h2>
                <div className="expense-item__price">$000</div>
            </div>
        </div>
    )
}



export default ExpenseItem;