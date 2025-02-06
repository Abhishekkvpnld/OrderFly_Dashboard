import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuShare2 } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

const UserPost = ({ post }) => {
    return (
        <div key={post.id} className="mb-4 p-4 bg-white shadow-md rounded-lg">
            <div className="flex items-center justify-between w-full gap-4">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <HiOutlineDotsHorizontal size={20} className="text-gray-600 hover:scale-110 transition-all" />
            </div>

            <div className="flex flex-col items-end">
                <div className="max-h-[100px] min-h-[100px] overflow-auto scrollbar-hide">
                    <p className="text-gray-700 text-sm">{post.body}</p>
                </div>

                <div className="flex items-center justify-end gap-3">
                    <LuShare2 size={18} className=" hover:scale-110 transition-all hover:text-blue-600" title="share" />
                    <FiEdit size={18} className=" hover:scale-110 transition-all hover:text-violet-600" title="edit" />
                    <MdOutlineDelete size={20} className=" hover:scale-110 transition-all hover:text-red-600" title="delete" />
                </div>
            </div>
        </div>
    );
};

export default UserPost;
