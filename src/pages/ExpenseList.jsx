import React, { useState } from 'react'
import Table from '../components/Table';
import SecondaryButton from '../components/common/SecondaryButton';
import AddExpenseForm from '../components/AddExpenseForm';
import Search from '../components/Search';
import { useSelector } from 'react-redux';

const ExpenseList = ({/*data, setData*/}) => {
    const [AddExpense, setAddExpense] = useState(false);
    
    return (
        <div className='mt-16 space-y-4'>
            <div className='flex justify-end md:w-9/12 w-[95%] mx-auto'>
                <SecondaryButton text="+ Add Expense" onClick={()=>setAddExpense(!AddExpense)} />
            </div>
            <Search/>
            <Table /*key={data.Id} data ={data} setData={setData}*//>
            {AddExpense && (
                <div className="fixed inset-0 bg-white/50 flex justify-center items-center z-50">
                    <AddExpenseForm
                        /*data={data}
                        setData={setData}*/
                        setAddExpense={setAddExpense}
                    />
                </div>
            )}
        </div>
    )
}

export default ExpenseList