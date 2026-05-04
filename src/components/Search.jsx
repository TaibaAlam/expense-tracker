import { useEffect, useState } from "react"

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
       <div className="w-3/5 bg-[#1a2b3c] rounded-lg p-2 flex flex-col gap-2 border border-white/50">
        <h1 className="text-white text-2xl">Search</h1>
        <input type="text" placeholder="Search" onChange={(e)=> setName(e.target.value)} className="p-1 bg-transparent text-white w-3/4 rounded-lg border border-white/50"/>
        <button className="w-1/4 p-1 rounded-md bg-[#619EFF] text-white cursor-pointer" onClick={HandleSearch}>Search</button>
       </div>
    )
}
export default Search;