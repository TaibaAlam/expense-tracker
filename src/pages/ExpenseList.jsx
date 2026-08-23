import React, { useState } from 'react'
import Table from '../components/Table';
import SecondaryButton from '../components/common/SecondaryButton';

const ExpenseList = ({data, setData}) => {
    const [addExpense, setAddExpense] = useState(false);
    return (
        <div className='mt-16 space-y-4'>
            <div className='flex justify-end w-9/12 mx-auto'>
                <SecondaryButton text="+ Add Expense" onClick={()=>setAddExpense(!addExpense)} />
            </div>
            <Table key={data.Id} data ={data} setData={setData}/>
            {/* {addExpense && <AddExpenseModal/>} */}
        </div>
    )
}

export default ExpenseList