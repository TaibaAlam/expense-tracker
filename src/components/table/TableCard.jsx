import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import toast from "react-hot-toast";

const TableCard = ({data, Remove}) => {
    const [ showModal, setShowModal ] = useState(false);
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

    const handleDelete = () => {
        Remove(data.Id);
        toast.success("Expense successfully deleted.");
    }
    return (
        <>
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
                    <RiDeleteBin6Fill color="D92243" size={20} className="cursor-pointer" onClick={()=> setShowModal(true)}/>
                </div>
            </div>

            { showModal && (
                <div className="fixed inset-0 bg-white/50 flex justify-center items-center z-50">
                    <div className="bg-white py-4 px-4 rounded-xl border border-black space-y-4">
                        <p className="font-bold text-3xl text-center text-brand-300">Are you sure?</p>
                        <p className="text-sm text-gray-700 text-center">Do you really want to delete this expense?</p>
                        <div className="flex justify-center items-center gap-4">
                            <PrimaryButton text='Yes, Delete' onClick={handleDelete} />
                            <SecondaryButton text='Cancel' onClick={()=> setShowModal(false)} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TableCard