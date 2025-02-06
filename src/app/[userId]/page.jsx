"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import UserPost from "../components/UserPost";
import LoadingPage from "../components/LoadingPage";
import UserDetails from "../components/UserDetails";
import { useParams } from "next/navigation";

const User = () => {
  const params = useParams(); 
  const userId = params.userId;


  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 
        const [userRes, postsRes] = await Promise.all([
          axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
          axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        ]);
        setUser(userRes.data);
        setPosts(postsRes.data); 
        toast.success("User Details and Posts Loaded Successfully"); 
      } catch (error) {
        setError("Something went wrong while fetching data");
        toast.error("Something went wrong while fetching user data.");
      } finally {
        setLoading(false); 
      }
    };

    fetchData();

  }, [userId]);

  if (loading) return <LoadingPage />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 max-h-[100vh] overflow-y-scroll hide-scrollbar w-full bg-slate-100">

      {user && <UserDetails user={user} />}

      <h2 className="font-bold text-red-700 text-3xl mb-4">User Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {posts?.length > 0 ? (
          posts.map((post) => <UserPost key={post.id} post={post} />)
        ) : (
          <p>No posts available for this user.</p>
        )}
      </div>
    </div>
  );
};

export default User;
