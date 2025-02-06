"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col max-h-[100vh] w-full p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl px-5 py-4 text-slate-500">
          All Users
        </h1>
        <div className="flex flex-col gap-3">
          <div className="border-2 px-4 rounded-lg flex items-center gap-3">
            <BsSearch
              className="hover:scale-110 transition-all"
              title="search"
            />
            <input className="w-full h-full py-1" />
          </div>

          <div>Filter</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 justify-center overflow-scroll w-full">
        {data.map((user) => (
          <UserCard key={user?.id} data={user} />
        ))}
      </div>
    </div>
  );
}
