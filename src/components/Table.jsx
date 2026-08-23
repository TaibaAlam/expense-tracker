import { useState } from "react";
import { useEffect } from "react";
import FilterButton from "./table/FilterButton";
import TableCard from "./table/TableCard";
import { categories } from "../data";

const Table = ({data, setData}) => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [total, setTotal] = useState(0);
    
    useEffect(()=>{
            let val = 0;
            for (let i =0; i < data.length; i++){
                val = val + parseInt(data[i]['amount']);
                console.log(typeof(data[i]['amount']));
            }
            setTotal(val);
        },[])

    const Remove = (Id) => {
        localStorage.removeItem(Id);
        let MyData = data.filter((datas) => datas.Id != Id);
        setData(MyData);
    }

    const filteredData = selectedCategory === "All"
                            ? data
                            : data.filter((expense) => expense.category === selectedCategory);

    
    return( 
        <div className="border border-black/40 rounded-xl p-6 mx-auto space-y-4 w-9/12">
            <div className="flex justify-between items-center border border-black/40 p-1 rounded-full">
             {
                categories.map((category) => (
                    <FilterButton
                        key={category.id}
                        category={category.label}
                        selected={selectedCategory === category.label}
                        onClick={() => setSelectedCategory(category.label)}
                    />
                ))
            }
            </div>
            {
                filteredData.length !== 0 
                ? filteredData.map((expense) => (
                    <TableCard
                        key={expense.Id}
                        data={expense}
                        Remove={Remove}
                    />
                ))
                : selectedCategory === "All" 
                ? <div className="flex flex-col items-center gap-5 my-20">
                    <div className="text-center space-y-1">
                        <p className="font-bold text-3xl">No <span className="text-brand-400">Expense</span></p>
                        <p>Add an expense to start tracking your spending.</p>
                    </div>
                </div>
                : <div className="text-center my-20 space-y-1">
                    <p className="font-bold text-3xl">No <span className="text-brand-400">Expense</span></p>
                    <p>There are no expenses in this category.</p>
                </div>
            }
            <div className="flex justify-end">
                <p className="border border-black/50 rounded-full py-1 px-3">Total Expense: {total}</p>
            </div>
        </div>
    );
}
export default Table