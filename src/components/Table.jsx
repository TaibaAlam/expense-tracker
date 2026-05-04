import { useState,useEffect } from "react";
//const [ForceRender,setForceRender] = useState(0);

const Table = ({data,setData}) => {

    let sl = 0;
    const Remove2 = (Id) => {
        localStorage.removeItem(Id);
        let Mydata = data.filter((datas) => datas.Id != Id);
        setData(Mydata);
    }
    
    return(
        <>
        <div className="w-full max-h-full text-white p-2 my-3 overflow-scroll">
            <h1 className="p-4 text-3xl mb-2">Recent Expenses</h1>
            <table className="p-4 backdrop-blur-3xl bg-white/3 border dark:border-gray-600 border-separate border-spacing-y-3 rounded-2xl w-full">
                <thead>
                    <tr className="bg-[#1a2b3c] border dark:border-gray-600 hover:translate-y-1 hover:scale-103">
                        <th className="p-4 border-y first:border-l last:border-r first:rounded-l-lg last:rounded-r-lg dark:border-gray-600" style={{width:"15%"}}>
                            Sl No.
                        </th>
                        <th className="p-4 border-y dark:border-gray-600">
                            Item Name
                        </th>
                        <th className="p-4 border-y dark:border-gray-600">
                            Amount
                        </th>
                        <th className="p-4 border-y first:border-l last:border-r first:rounded-l-lg last:rounded-r-lg dark:border-gray-600" style={{width:"20%"}}></th>
                    </tr>
                </thead>

                <tbody>

                {data.map((datas) =>
                    <tr className="hover:scale-103 hover:translate-y-1">
                        <td className="text-center p-4 border-y first:border-l last:border-r first:rounded-l-lg last:rounded-r-lg dark:border-gray-600">{sl = sl + 1}.</td>
                        <td className="text-center p-4 border-y dark:border-gray-600">{datas.name}</td>
                        <td className="text-center p-4 border-y dark:border-gray-600">{datas.amount}</td>
                        <td className="text-center p-4 border-y first:border-l last:border-r first:rounded-l-lg last:rounded-r-lg dark:border-gray-600"><button className="bg-[#1a2b3c] p-2 rounded-lg border border-white/20 cursor-pointer" onClick={()=>Remove2(datas.Id)}>Remove</button></td>
                    </tr>
                )}
                </tbody>

            </table>
        </div>
        </>
    )
}
export default Table