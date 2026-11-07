import { useEffect, useState } from "react"
import { IoSearch } from "react-icons/io5";
import {useSelector, useDispatch} from "react-redux";
import { setData } from "../features/Slice";

function Search(){

    const [name,setName] = useState("");
    let keys = Object.keys(localStorage);

    {useEffect(()=>{
        let updatedData =[];
            keys.map((key)=>{
            updatedData = [...updatedData,JSON.parse(localStorage.getItem(key))];
            })
            dispatch(setData(updatedData));
            },[localStorage.length])

    useEffect(()=>{
        if(name == ""){
            let updatedData =[];
            keys.map((key)=>{
            updatedData = [...updatedData,JSON.parse(localStorage.getItem(key))];
        })

        dispatch(setData(updatedData));
        }
        if(name != ""){
             const Arr = data.filter((datas)=>((datas.name).toLowerCase()).includes(name.toLowerCase()));
             console.log(Arr);
             dispatch(setData(Arr));
             console.log("Hello");
            //HandleSearch;
        }
        
    },[name])}
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const HandleSearch = () => {
        const Arr = data.filter((datas)=>((datas.name).toLowerCase()).includes(name.toLowerCase()));
        console.log(Arr);
        dispatch(setData(Arr));
    }

    return(
       <div className="w-3/5 relative">
            <input type="text" placeholder="Search" onChange={(e)=> setName(e.target.value)} className="p-1 pl-3 bg-transparent rounded-lg border border-black/50 outline-none w-full"/>
            <div onClick={HandleSearch} className="absolute right-4 top-2">
                <IoSearch/>
            </div>
       </div>
    )
}
export default Search;