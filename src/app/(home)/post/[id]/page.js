'use client'
import Image from "next/image";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useParams} from 'next/navigation'

export default function postDetails({}) {
    const params = useParams()
    const [posts, setPosts] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`/api/posts/${params.id}`);
                if (response.status === 200) {
                    setPosts(response.data);
                } else {
                    toast.error("سیستم با خطا رو به رو شده است")
                }
            } catch (err) {
                toast.error("سیستم با خطا رو به رو شده است")
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <div className="flex items-center justify-center flex-col mb-10 mt-9">
                <div className="w-[70%] gap-3  flex items-center flex-col border border-neutral-400 p-10 rounded">
                    <div className="">
                        <Image src="/blog.jpg" alt="logo" width={0}
                               height={0}
                               sizes="100vw"
                               style={{width: '90%', height: 'auto'}}/>
                    </div>
                    <div className="mt-10">
                        <h3 className="font-bold text-mainBlue text-[1.2rem]">
                            {posts?.title}
                        </h3>
                    </div>
                    <div className="mt-10 ">
                        <p>
                            {posts?.content}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
