import { useState } from "react"

const InputForm = ({setTotal,total,data,setData}) => {
    const [amount,setAmount] = useState()
    const [name,setName] = useState("")
    const [category, setCategory] = useState("");

    const keys = Object.keys(localStorage);

    const handleInput = (e) => {
        e.preventDefault();
        const val = total + amount;
        setTotal(val);

        localStorage.setItem(Date.now().toString(),JSON.stringify({
            Id : Date.now(),
            name: name,
            amount: amount,
            category: category,
        }));

        data = [...data,JSON.parse(localStorage.getItem(Date.now().toString()))];
        setData(data);

        setName("");
        setAmount("");
        setCategory("");
    }

    
    
    return (
        <>
            <div className="w-1/4 flex flex-col justify-between p-3 my-2 border border-white/20 rounded-xl bg-[#1a2b3c]">
                <div className="mt-2 flex flex-col gap-4">
                    <h1 className="text-white text-3xl">
                        Add New Transactions
                    </h1>
                    <input type="text" value = {name} placeholder="Enter Item Name" className="p-2 rounded-lg h-9 text-white bg-transparent border border-white/20 w-full" onChange={(e) => {setName(e.target.value)}}/>
                    <input type="number" value = {amount}  placeholder="Enter Amount" className="p-2 rounded-lg h-9 text-white bg-transparent border border-white/20  w-full" onChange={(e) => {setAmount(Number(e.target.value))}}/>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="p-2 rounded-lg h-9 text-white bg-transparent border border-white/20 w-full"
                    >
                        <option value="" disabled className="text-black">
                            Select Category
                        </option>

                        <option value="Food" className="text-black">
                            Food
                        </option>

                        <option value="Travelling" className="text-black">
                            Travelling
                        </option>

                        <option value="Fashion" className="text-black">
                            Fashion
                        </option>

                        <option value="Shopping" className="text-black">
                            Shopping
                        </option>

                        <option value="Education" className="text-black">
                            Education
                        </option>

                        <option value="Entertainment" className="text-black">
                            Entertainment
                        </option>
                    </select>
                    <button className="p-2 rounded-full bg-[#619EFF] w-full text-white cursor-pointer" onClick={handleInput}>
                        + Create Expense
                    </button>
                </div>
                <button 
                    className="w-full bg-blue-400 text-center py-1 mb-3 rounded-full text-white border border-white/20 hover:scale-103 cursor-pointer" 
                    onClick={()=>{
                        localStorage.clear();
                        setData([]);
                    }}
                >
                    Delete All Data
                </button>
            </div>
        </>
    )
}

export default InputForm
 