import { useState } from "react";
import { useEffect } from "react";
import FilterButton from "./table/FilterButton";
import TableCard from "./table/TableCard";
import { categories, categoryOptions } from "../data";
import PrimaryButton from "./common/PrimaryButton";
import { useSelector,useDispatch } from "react-redux";
import { setData,setTotal } from "../features/Slice";
import Select from "react-select";

const Table = ({/*data, setData*/}) => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const total = useSelector((state) => state.total);
    const [showButton, setShowButton] = useState(false);
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const Remove = (Id) => {
        localStorage.removeItem(Id);
        let MyData = data.filter((datas) => datas.Id != Id);
        dispatch(setData(MyData));
    }

    const HandleUI = () => {
        setShowButton((prev) => !prev)
    }
    const filteredData = selectedCategory === "All"
                            ? data
                            : data.filter((expense) => expense.category === selectedCategory);

    useEffect(() => {
        dispatch(setTotal(filteredData));
    },[filteredData])
    
    return( 
        <div className={`border border-black/40 rounded-xl p-6 mx-auto mb-10 space-y-4 md:w-9/12 w-[95%]`}>
            {/* <div className="md:hidden">
                <PrimaryButton text={"category"} onClick={HandleUI}/>
            </div> */}
            <div className="md:flex hidden justify-between items-center border border-black/40 p-1 rounded-full">
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
            <div className="md:hidden">
                {
                    // <select name="Category" 
                    //     id="categogy" 
                    //     className="w-full border border-brand-300 text-xl text-brand-300 font p-2 rounded-md"
                    //     //value={selectedCategory}
                    //     onClick={(e) => setSelectedCategory(e.target.value)}
                    // >
                    //     {categories.map((category) => 
                    //         {
                    //             return (<option value={category.label}>{category.label}</option>);
                    //         }
                    //     )}
                    // </select>
                    <Select
                        value={categoryOptions.find(
                            (option) => option.value === selectedCategory
                        )}
                        onChange={(option) => setSelectedCategory(option.value)}
                        options={categoryOptions}
                        placeholder = 'Select a category...'
                        classNames={{
                            control: () =>
                                `!border !border-brand-300 !rounded-md !shadow-none`,
                            option: ({ isFocused, isSelected }) =>
                                `!cursor-pointer ${
                                    isSelected
                                        ? "!bg-brand-300 !text-white"
                                        : isFocused
                                        ? "!bg-brand-100"
                                        : ""
                                }`,

                            singleValue: () => "!text-brand-300",
                        }}
                    />
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