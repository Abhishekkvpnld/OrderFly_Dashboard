"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UserPost from "../components/UserPost";
import LoadingPage from "../components/LoadingPage";
import UserDetails from "../components/UserDetails";

const User = ({ params }) => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const [userRes, postsRes] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`), 
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`) 
      ]);

      setUser(userRes.data);
      setPosts(postsRes.data);
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.userId]);

  return (
    <div className="p-4 max-h-[100vh] overflow-scroll hide-scrollbar w-full bg-slate-100">
      {loading ? (
        <LoadingPage />
      ) : (
        <>
   
          {user && <UserDetails user={user} />}



          <h2 className="font-bold text-red-700 text-3xl mb-4">User Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {posts.length > 0 ? (
              posts.map((post) => <UserPost key={post.id} post={post} />)
            ) : (
              <p>No posts available for this user.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default User;
