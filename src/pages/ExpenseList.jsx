import React, { useState } from 'react'
import Table from '../components/Table';
import SecondaryButton from '../components/common/SecondaryButton';
import AddExpenseForm from '../components/AddExpenseForm';

const ExpenseList = ({data, setData}) => {
    const [addExpense, setAddExpense] = useState(false);
    return (
        <div className='mt-16 space-y-4'>
            <div className='flex justify-end w-9/12 mx-auto'>
                <SecondaryButton text="+ Add Expense" onClick={()=>setAddExpense(!addExpense)} />
            </div>
            <Table key={data.Id} data ={data} setData={setData}/>
            {addExpense && (
                <div className="fixed inset-0 bg-white/50 flex justify-center items-center z-50">
                    <AddExpenseForm
                        data={data}
                        setData={setData}
                        setAddExpense={setAddExpense}
                    />
                </div>
            )}
        </div>
    )
}

export default ExpenseList