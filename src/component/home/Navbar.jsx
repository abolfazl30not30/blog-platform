"use client";

import {usePathname, useRouter} from "next/navigation";
import {CgMenuRight} from "react-icons/cg";
import {useEffect, useState} from "react";
import {IoMdClose} from "react-icons/io";
import Link from "next/link";
import Image from "next/image";


function Navbar() {

    const [isShowNavbar, setIsShowNavbar] = useState(false);
    const handleToggleNavbar = () => {
        setIsShowNavbar(!isShowNavbar)
    }

    const pathname = usePathname()

    return (
        <>
            <nav className="sticky bg-white z-50 top-0  py-3 md:py-2 ">
                <div className="w-full flex items-center justify-between lg:gap-2 gap-0.5 lg:px-10 px-5">
                    <div className="md:hidden">
                        <button onClick={handleToggleNavbar} className="transition-all duration-900">
                            {
                                isShowNavbar ? (
                                    <IoMdClose className="text-3xl text-[#07A0E6]"/>
                                ) : (
                                    <CgMenuRight className="text-3xl text-[#07A0E6]"/>
                                )
                            }
                        </button>
                    </div>
                    <div className="md:hidden">
                        <Link href="/">
                            <Image src="/sepehrsaya.png" alt="logo" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{width: '100%', height: 'auto'}}/>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-5">
                        <div className="">
                            <Link href="/">
                                <Image src="/sepehrsaya.png" alt="logo" width={0}
                                       height={0}
                                       sizes="100vw"
                                       style={{width: '65%', height: 'auto'}}/>
                            </Link>
                        </div>
                        <div className="flex gap-3">
                            <div>
                                <Link
                                    href="/"
                                    className={pathname === "/" ? "block py-2 px-2 border-b border-b-2 border-b-solid  border-b-mainBlue" : "block py-2 px-2 "}>
                                    <div
                                        className={
                                            pathname === "/"
                                                ? "flex gap-1 font-bold text-mainBlue text-[0.9rem]"
                                                : "flex gap-1 font-bold text-mainBlue opacity-70 hover:text-neutral-500 text-[0.9rem]"
                                        }>
                                        صفحه اصلی
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href="/new-post"
                                    className={pathname === "/new-post" ? "block py-2 px-2 border-b border-b-2 border-b-solid  border-b-mainBlue" : "block py-2 px-2 "}>
                                    <div
                                        className={
                                            pathname === "/new-post"
                                                ? "flex gap-1 font-bold text-mainBlue text-[0.9rem]"
                                                : "flex gap-1 font-bold text-mainBlue opacity-70 hover:text-neutral-500 text-[0.9rem]"
                                        }>
                                        پست جدید
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 right-0 transition-all duration-700 md:hidden z-10" style={isShowNavbar ? {top: "5rem"} : {top: "-30rem"}}>
                    <div className=" px-10 pb-4 bg-[#07A0E6]">
                        <ul className="flex flex-col">
                            <li className=""><Link href="/" className="font-[200] block p-4 hover:bg-[#1aadf1]"
                                                   onClick={handleToggleNavbar}><span
                                className={pathname === "/" ? "activeNavLink" : "text-white"}>صفحه اصلی</span></Link></li>

                            <li className=""><Link href="/new-post" className="font-[200] block p-4 hover:bg-[#1aadf1]"
                                                   onClick={handleToggleNavbar}><span
                                className={pathname === "/new-post" ? "activeNavLink" : "text-white"}>پست جدید</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
