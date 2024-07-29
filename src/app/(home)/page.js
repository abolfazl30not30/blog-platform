'use client'
import {FiArrowRightCircle} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/posts');
                if (response.status === 200) {
                    console.log(response)
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
            <div className='flex justify-center'>
                <div className="w-full md:w-[90%] md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                    {
                        posts?.map((item)=>(
                            <div className="justify-between bg-white  box-border  shadow-[0_0px_7px_1px_rgba(0,0,0,0.1)] rounded-3xl flex flex-col w-full mt-10 md:0">
                                <div className="w-[100%] h-[15rem] flex justify-center pt-4">
                                    <Image src="/blog.jpg" alt="logo" width={0}
                                           height={0}
                                           sizes="100vw"
                                           style={{width: '90%', height: 'auto'}}/>
                                </div>
                                <div className="mx-5">
                                    <p className="text-black text-right text-xl font-bold my-4">
                                        {item.title}
                                    </p>
                                    <p className="text-neutral-500 mb-4 text-[0.8rem]">
                                        {item.content.slice(0,50)}....
                                    </p>
                                </div>
                                <div className="flex justify-center mt-2 mb-5 ">
                                    <Link href={`/post/${item._id}`}
                                          className="flex items-center bg-transparent text-sm hover:bg-mainBlue hover:text-white text-mainBlue  py-2 px-4  border border-1 border-mainBlue rounded hover:border-transparent">
                                        <FiArrowRightCircle fontSize="15px" className="transform"/>
                                        <span className="mr-2">ادامه مطلب</span>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
