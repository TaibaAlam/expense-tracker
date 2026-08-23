import { useEffect, useState } from "react"
import { IoSearch } from "react-icons/io5";

function Search({data,setData,all,setAll}){

    const [name,setName] = useState("");
    let keys = Object.keys(localStorage);

    useEffect(()=>{
        let updatedData =[];
            keys.map((key)=>{
            updatedData = [...updatedData,JSON.parse(localStorage.getItem(key))];
            })
            setAll(updatedData);
    },[localStorage.length])

    useEffect(()=>{
        if(name == ""){
            let updatedData =[];
            keys.map((key)=>{
            updatedData = [...updatedData,JSON.parse(localStorage.getItem(key))];
        })

        setData(updatedData);
        }
        if(name != ""){
             const Arr = all.filter((datas)=>((datas.name).toLowerCase()).includes(name.toLowerCase()));
             console.log(Arr);
             setData(Arr);
             console.log("Hello");
            //HandleSearch;
        }
        
    },[name,all])

    const HandleSearch = () => {
        const Arr = data.filter((datas)=>((datas.name).toLowerCase()).includes(name.toLowerCase()));
        console.log(Arr);
        setData(Arr);
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