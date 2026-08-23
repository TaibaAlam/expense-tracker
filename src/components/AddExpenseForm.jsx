"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";
import { categoryOptions } from "../data";
import PrimaryButton from "./common/PrimaryButton";
import SecondaryButton from "./common/SecondaryButton";
import { useNavigate } from 'react-router-dom';

const AddExpenseForm = ({data,setData, setAddExpense}) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();
    //const [data, setData] = useState([]);

    const handleInput = (e) => {
        e.preventDefault();

        if (!name || !amount || !category) {
            toast.error("Please fill all the required fields");
            return;
        }
        
        localStorage.setItem(Date.now().toString(),JSON.stringify({
            Id : Date.now(),
            name: name,
            amount: amount,
            category: category
        }));

        data = [...data,JSON.parse(localStorage.getItem(Date.now().toString()))];
        setData(data);
        toast.success("Expense successfully added.");
        for (let i =0; i < data.length; i++){
            console.log(data[i]['name']);
        }
        setAddExpense(false);
    };

    const handleClear = () => {
        setName("");
        setAmount("");
        setCategory("");
        setAddExpense(false);
    };

    return (
        <div className="w-7/12 mx-auto mt-16 rounded-3xl border border-black/30 bg-white p-6 shadow-2xl">

        <div className="z-10 flex flex-col gap-5">
            {/* Heading */}
            <div>
            <h1 className="text-3xl font-semibold text-center text-brand-300 tracking-tight">
                Add Expense
            </h1>

            <p className="mt-1 text-sm text-center">
                Track your daily spending easily by listing them with us
            </p>
            </div>

            {/* Item Name */}
            <div className="flex flex-col gap-2">
            <label className="text-sm">Item Name <span className="text-red-500">*</span></label>
            <input
                type="text"
                value={name}
                placeholder="e.g. Pizza, Uber..."
                className="h-12 rounded-2xl border border-black/20 px-4 outline-none placeholder:text-gray-500 focus:border-brand-300"
                onChange={(e) => setName(e.target.value)}
            />
            </div>

            {/* Amount */}
            <div className="flex flex-col gap-2">
            <label className="text-sm">Amount <span className="text-red-500">*</span></label>

            <input
                type="number"
                value={amount}
                placeholder="₹ Enter Amount"
                className="h-12 rounded-2xl border border-black/20 px-4 outline-none placeholder:text-gray-500 focus:border-brand-300"
                onChange={(e) => setAmount(e.target.value)}
            />
            </div>

            {/* Category */}
            <div className="flex flex-col gap-2">
            <label className="text-sm">Category <span className="text-red-500">*</span></label>
            <Select
                defaultValue={category}
                onChange={(option)=>{
                    setCategory(option.value);
                }}
                options={categoryOptions}
                styles={{
                control: (provided, state) => ({
                    ...provided,
                    minHeight: "48px",
                    borderRadius: "14px",
                    borderColor: state.isFocused
                    ? "#74C476"
                    : "rgba(0,0,0,0.2)",
                    boxShadow: "none",
                    "&:hover": {
                    borderColor: "#74C476",
                    },
                }),

                option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected
                    ? "#74C476" // brand-300
                    : state.isFocused
                    ? "#e8f8e5"
                    : "white",

                    color: state.isSelected
                    ? "white"
                    : "black",

                    cursor: "pointer",
                }),
                }}
            />
            </div>

            {/* Create Expense Button */}
            <div className="flex justify-end gap-6">
                <PrimaryButton text="Create" onClick={handleInput}/>
                <SecondaryButton text="Cancel" onClick={handleClear} />
            </div>
        </div>
        </div>
    );
};

export default AddExpenseForm;
