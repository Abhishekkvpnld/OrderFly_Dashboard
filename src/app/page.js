"use client";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import UserCard from "./components/UserCard";
import { BsSearch } from "react-icons/bs";
import LoadingPage from "./components/LoadingPage";
import toast from "react-hot-toast";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(res.data);
      toast.success("All Users")
    } catch (error) {
      toast.error(error.message)
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const filteredData = useMemo(() => {
    return data.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  return (
    <div className="flex flex-col max-h-[100vh] w-full p-4">

      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl px-5 py-4 text-slate-500">
          All Users
        </h1>
        

        <div className="border-2 px-4 rounded-lg flex items-center gap-3 bg-white">
          <BsSearch className="hover:scale-110 transition-all" title="Search" />
          <input
            className="w-full h-full py-1 px-2 focus:outline-none"
            placeholder="Search by name..."
            aria-label="Search users by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

   
      {!loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-auto scrollbar-hide w-full">
          {filteredData.length > 0 ? (
            filteredData.map((user) => <UserCard key={user.id} data={user} />)
          ) : (
            <p className="text-center text-gray-500 mt-4">No users found.</p>
          )}
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}
