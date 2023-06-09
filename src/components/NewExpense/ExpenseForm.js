import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    //   const [userInput,setUserInput] = useState({
    //     enteredTitle:"",
    //     enteredAmount:'',
    //     enteredDate:''
    //    })

    const titleChangeHandler = (e) => {
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle:e.target.value}
        // }) //when using one useState
        setEnteredTitle(e.target.value);
    };
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    };
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }


    return (
        <div>
         
                <form onSubmit={submitHandler}>

                    <div className='new-expense__controls'>
                        <div className='new-expense__control'>
                            <label>Title</label>
                            <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                        </div>
                        <div className='new-expense__control' >
                            <label>Amount</label>
                            <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
                        </div>
                        <div className='new-expense__control'>
                            <label>Date</label>
                            <input value={enteredDate} onChange={dateChangeHandler} type='date' min='2020-01-01' max='2023-06-01' />
                        </div>
                    </div>
                    <div className='new-expense__actions'>
                        <button onClick={props.onCancel} >Cancel</button>
                        <button  type='submit'>Add Expense</button>
                    </div>
                </form>
            
        </div>
    )
}

export default ExpenseForm;