import { useState } from "react";
import ProfileImg from "../../../public/user.jpg";



const UserDetails = ({ user }) => {

    const [address, setAddress] = useState(false);

    return (
        <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-300 hover:shadow-2xl hover:border-gray-500 transition-all duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center space-y-4">

                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                    <img src={ProfileImg.src} alt="User Avatar" className="w-full h-full object-cover" />
                </div>


                <div className="text-center space-y-1">
                    <h3 className="text-xl font-semibold text-gray-800">{user?.name}</h3>
                    {
                        !address ? (
                            <>
                                <p className="text-sm text-gray-600 font-semibold">{user?.email}</p>
                                <p className="text-sm text-gray-600 font-semibold">{user?.company?.name}</p>
                            </>) : (
                            <div className="flex flex-col border rounded-lg bg-slate-100 p-2">
                                <h1 className="font-bold text-blue-600">Address</h1>
                                <p className="text-sm text-gray-600 font-semibold">{user?.address?.street}</p>
                                <p className="text-sm text-gray-600 font-semibold">{user?.address.city} <span className="underline text-green-700">({user?.address?.zipcode})</span></p>
                            </div>
                        )

                    }
                </div>


           
            </div>


            <div className="flex justify-between items-center mt-6">
                <span className="text-xs text-gray-400">User ID: {user?.id}</span>
                <button onClick={() => setAddress(prev=>!prev)} className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 focus:outline-none transform hover:scale-105 transition-all">
                    View Profile
                </button>
            </div>
        </div>
    );
}

export default UserDetails