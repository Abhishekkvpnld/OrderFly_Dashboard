import { HiOutlineDotsVertical } from "react-icons/hi";
import ProfileImg from "../../../public/user.jpg";
import { CiShare1 } from "react-icons/ci";
import Image from "next/image";
import { CgWorkAlt } from "react-icons/cg";
import Link from "next/link";


const UserCard = ({ data }) => {
    return (
        <Link href={`/${data?.id}`} className="mt-5 flex flex-col justify-center px-2 sm:px-6 md:px-5 lg:px-5 rounded-lg w-full p-3 border hover:shadow-lg hover:border-slate-400 border-slate-300">

            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                    <Image
                        src={ProfileImg.src}
                        alt="User Avatar"
                        width={96}
                        height={96}
                        className="object-cover  w-12 h-12 rounded-full overflow-hidden border-2 border-black "
                    />
                    <div className="flex flex-col">
                        <h1 className="font-semibold">{data?.name}</h1>
                        <p className="text-slate-600 text-sm">{data?.email}</p>
                    </div>
                </div>
                <HiOutlineDotsVertical title="Edit" size={20} className="hover:scale-110 transition-all text-gray-500 hover:text-blue-700" />
            </div>

            <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-1">
                    <CgWorkAlt title="Company" className="text-slate-600" size={20}/>
                    <h1 className="text-slate-600 ml-4"> {data?.company?.name}</h1>
                </div>
               <Link href={`/${data?.id}`}> <CiShare1 title="Share" size={20} className=" transition-all hover:rounded-full hover:scale-110" /></Link>
            </div>

        </Link>
    );
}

export default UserCard