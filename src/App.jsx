import { useEffect, useState } from "react"
import InputForm from "./components/InputForm"
import Table from "./components/Table"
import Search from "./components/Search"

function App() {

    const [data,setData] = useState([]);
    const [total,setTotal] = useState(0)
    const [all,setAll] = useState([]);

    let keys = Object.keys(localStorage);

    useEffect(()=>{

        let updatedData =[];
        let val = 0;
        keys.map((key)=>{
            updatedData = [...updatedData,JSON.parse(localStorage.getItem(key))];
            updatedData.sort((a,b)=> a.Id - b.Id);
            val = val + JSON.parse(localStorage.getItem(key)).amount;
        })

        setData(updatedData);
        setTotal(val);
        
    },[])

    useEffect(()=>{
        let val = 0;
        for (let i =0; i < data.length; i++){
            val = val + data[i]['amount'];
        }
        //setAll(data);
        setTotal(val);
    },[data])

    return (
        <div className='p-3 flex max-h-screen bg-[#131b23]'>
            <InputForm settotal = {setTotal} total = {total} data ={data} setData = {setData}/>
            <div className="w-3/4 flex flex-col">
                <div className="w-full flex gap-4 p-2">
                    <Search data = {data} setData = {setData} all ={all} setAll = {setAll}/>
                    <div className="w-2/5 bg-[#1a2b3c] border border-white/50 rounded-md">
                        <h1 className="text-white text-2xl p-2">Total Expense: {total}</h1>
                    </div>
                </div>
                <Table data = {data} setData = {setData}/>
            </div>
        </div>
    )
}

export default App

