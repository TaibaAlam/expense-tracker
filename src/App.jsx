import { useEffect, useState } from "react"
import Navbar from "./components/common/Navbar";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import ExpenseList from "./pages/ExpenseList";
import { useSelector,useDispatch } from "react-redux";
import { setData, setTotal } from "./features/Slice";

function App() {

    /*const [data,setData] = useState([]);*/
    const data = useSelector((state) => state.data);
    //const [total,setTotal] = useState(0)
    const [all,setAll] = useState([]);
    const dispatch = useDispatch();

    let keys = Object.keys(localStorage);

    useEffect(()=>{

        let updatedData =[];
        let val = 0;
        keys.map((key)=>{
            updatedData = [...updatedData,JSON.parse(localStorage.getItem(key))];
            updatedData.sort((a,b)=> a.Id - b.Id);
            val = val + JSON.parse(localStorage.getItem(key)).amount;
        })
        console.log("one");
        dispatch(setData(updatedData));

        dispatch(setTotal(updatedData));
        
    },[])

    useEffect(()=>{
        let val = 0;
        for (let i = 0; i < data.length; i++){
            val = val + data[i]['amount'];
        }
        //setAll(data);
        dispatch(setTotal(data));
        //console.log(total)
    },[data])

    return (
        <div>
            <Navbar />

            <Routes>
                <Route
                    path="/"
                    element={<Dashboard />}
                />
                <Route
                    path="/expense-list"
                    element={<ExpenseList /*key={data.Id} data ={data} setData={setData}*//>}
                />
            </Routes>
        </div>
    )
}

export default App

