import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    total: 0
}

const slice = createSlice({
    name: 'Expense',
    initialState,
    reducers:{
        addExpense: (state, action) => {
            state.data.push(action.payload);
            console.log(action.payload);
            console.log("one")
        },
        setData: (state,action) => {
            state.data = action.payload;
            console.log("two");
        },
        setTotal: (state, action) => {
            /*const totalAmount = state.data.reduce(
                (total, data) => total + Number(data.amount),
                0
            );*/

            const total = 0;
            const totalAmount = action.payload.reduce((total, data) => total + Number(data.amount), 0) 
            state.total = totalAmount

            console.log("total amount -> ", totalAmount);

            //state.total = totalAmount;
        }
    }
})

export const { addExpense, setData, setTotal } = slice.actions;
export default slice.reducer;