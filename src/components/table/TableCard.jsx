import { RiDeleteBin6Fill } from "react-icons/ri";

const TableCard = ({data, Remove}) => {
    const formatDate = (timestamp) => {
        const date = new Date(Number(timestamp));

        return date.toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    return (
        <div className="border border-black-40 p-6 rounded-xl flex">
            <div className="w-3/4 space-y-2">
                <div className="text-2xl font-bold">{data.name}</div>
                <div className="flex justify-between items-center">
                    <div className="text-sm"><span className="font-bold">Amount:</span> ₹{data.amount}</div>
                    <div className="text-sm"><span className="font-bold">Category:</span> {data.category}</div>
                    <div className="text-sm"><span className="font-bold">Date:</span> {formatDate(data.Id)}</div>
                </div>
            </div>
            <div className="w-1/4 flex justify-center items-center">
                <RiDeleteBin6Fill color="D92243" size={20} className="cursor-pointer" onClick={() => Remove(data.Id)}/>
            </div>
        </div>
    )
}

export default TableCard