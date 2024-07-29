'use client'
import React, {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {Skeleton} from "@mui/material";
import AddDataDialog from "@/component/posts/AddDataDialog";
import DeleteDialog from "@/component/posts/DeleteDialog";
import EditInfoDialog from "@/component/posts/EditInfoDialog";


export default function page() {

    const [posts, setPosts] = useState([]);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [openAddData, setOpenAddData] = useState(false);

    const [openDelete, setOpenDelete] = useState(false);
    const [deleteTargetId, setDeleteTargetId] = useState("");

    const [openEditInfo, setOpenEditInfo] = useState(false);

    const [editInfoTarget, setEditInfoTarget] = useState({
        _id:"",
        title: "",
        content: "",
    });

    const handleOpenAddData = () => {
        setOpenAddData(true);
    };

    const handleCloseAddData = () => {
        setOpenAddData(false);
    };

    const handleOpenDelete = (id) => {
        setDeleteTargetId(id);
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setDeleteTargetId("");
        setOpenDelete(false);
    };

    const handleOpenEditInfo = (info) => {
        setEditInfoTarget(info);
        setOpenEditInfo(true);
    };

    const handleCloseEditInfo = () => {
        setEditInfoTarget({
            title: "",
            content: "",
        });
        setOpenEditInfo(false);
    };

    const fetchPosts = async () => {
        setIsDataLoading(true)
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
        setIsDataLoading(false)
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <div className="flex  justify-center mt-9">
                <div className="w-[95%] md:w-[80%] gap-5  flex flex-col justify-center">
                    <div className=" rounded flex justify-between">
                        <div>
                            <h3 className="text-[1.5rem] font-bold">فهرست بلاگ ها</h3>
                        </div>
                        <div>
                            <button className="bg-mainBlue py-2 px-5 text-white rounded" onClick={handleOpenAddData}>افزودن بلاگ</button>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="overflow-x-auto">
                            <table
                                className=" w-full table-auto overflow-scroll border-collapse border-spacing-0 text-sm text-center text-gray70  ">
                                <thead className="text-[0.9rem] text-gray80  md:bg-[#F2EDED] ">
                                <tr>
                                    <th className="hidden md:table-cell px-6 py-4">#</th>
                                    <th className="px-2 md:px-6 py-4">عنوان بلاگ</th>
                                    <th className="px-2 md:px-6 py-4">عملیات</th>
                                </tr>
                                </thead>
                                <tbody className="table-body">
                                {
                                    isDataLoading
                                        ? [...Array(3)].map(() => (
                                            <tr className="border-b">
                                                <td className="hidden md:table-cell px-6 py-4  text-gray70 whitespace-nowrap ">
                                                    <Skeleton
                                                        variant="text"
                                                        sx={{fontSize: "1rem"}}
                                                    />
                                                </td>
                                                <td className="px-2 md:px-6 py-4  text-gray70 whitespace-nowrap ">
                                                    <Skeleton
                                                        variant="text"
                                                        sx={{fontSize: "1rem"}}
                                                    />
                                                </td>
                                                <td
                                                    scope="row"
                                                    className="flex gap-2 px-6 py-4 justify-center text-gray70 whitespace-nowrap "
                                                >
                                                    <Skeleton
                                                        variant="rounded"
                                                        width={23}
                                                        height={23}
                                                    />
                                                    <Skeleton
                                                        variant="rounded"
                                                        width={23}
                                                        height={23}
                                                    />
                                                </td>
                                            </tr>
                                        ))
                                        : posts?.map((data, index) => (
                                            <tr className="table-row border-b">
                                                <td className="hidden md:table-cell px-6 py-4  text-gray70 whitespace-nowrap ">
                                                    {index + 1}
                                                </td>
                                                <td className="px-2 md:px-6 py-4  text-gray70 whitespace-nowrap ">
                                                    {data.title}
                                                </td>
                                                <td
                                                    scope="row"
                                                    className="flex gap-2 px-6 py-4 justify-center text-gray70 whitespace-nowrap ">                                            <button
                                                    onClick={() => {
                                                        handleOpenEditInfo(data);
                                                    }}
                                                    className="border border-1 border-solid border-[#2492FF] rounded p-[0.4rem] hover:bg-blue-100"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                    >
                                                        <g clip-path="url(#clip0_197_250)">
                                                            <path
                                                                d="M7.3335 2.66666H4.5335C3.41339 2.66666 2.85334 2.66666 2.42552 2.88464C2.04919 3.07639 1.74323 3.38235 1.55148 3.75867C1.3335 4.1865 1.3335 4.74655 1.3335 5.86666V11.4667C1.3335 12.5868 1.3335 13.1468 1.55148 13.5746C1.74323 13.951 2.04919 14.2569 2.42552 14.4487C2.85334 14.6667 3.41339 14.6667 4.5335 14.6667H10.1335C11.2536 14.6667 11.8137 14.6667 12.2415 14.4487C12.6178 14.2569 12.9238 13.951 13.1155 13.5746C13.3335 13.1468 13.3335 12.5868 13.3335 11.4667V8.66666M5.33348 10.6667H6.44984C6.77596 10.6667 6.93902 10.6667 7.09247 10.6298C7.22852 10.5972 7.35858 10.5433 7.47788 10.4702C7.61243 10.3877 7.72773 10.2724 7.95833 10.0418L14.3335 3.66666C14.8858 3.11437 14.8858 2.21894 14.3335 1.66666C13.7812 1.11437 12.8858 1.11437 12.3335 1.66665L5.95832 8.04182C5.72772 8.27242 5.61241 8.38772 5.52996 8.52228C5.45685 8.64157 5.40298 8.77163 5.37032 8.90768C5.33348 9.06113 5.33348 9.22419 5.33348 9.55031V10.6667Z"
                                                                stroke="#2492FF"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_197_250">
                                                                <rect
                                                                    width="16"
                                                                    height="16"
                                                                    fill="white"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </button>
                                                    <button
                                                        onClick={() => {
                                                            handleOpenDelete(data._id);
                                                        }}
                                                        className="border border-1 border-solid border-[#FE4949] rounded p-[0.4rem] hover:bg-red-100"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M10.6667 3.99998V3.46665C10.6667 2.71991 10.6667 2.34654 10.5213 2.06133C10.3935 1.81044 10.1895 1.60647 9.93865 1.47864C9.65344 1.33331 9.28007 1.33331 8.53333 1.33331H7.46667C6.71993 1.33331 6.34656 1.33331 6.06135 1.47864C5.81046 1.60647 5.60649 1.81044 5.47866 2.06133C5.33333 2.34654 5.33333 2.71991 5.33333 3.46665V3.99998M6.66667 7.66665V11M9.33333 7.66665V11M2 3.99998H14M12.6667 3.99998V11.4666C12.6667 12.5868 12.6667 13.1468 12.4487 13.5746C12.2569 13.951 11.951 14.2569 11.5746 14.4487C11.1468 14.6666 10.5868 14.6666 9.46667 14.6666H6.53333C5.41323 14.6666 4.85318 14.6666 4.42535 14.4487C4.04903 14.2569 3.74307 13.951 3.55132 13.5746C3.33333 13.1468 3.33333 12.5868 3.33333 11.4666V3.99998"
                                                                stroke="#FE4949"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <AddDataDialog handleCloseAddData={handleCloseAddData}
                           fetchPosts={fetchPosts}
                           openAddData={openAddData}/>

            <DeleteDialog deleteTargetId={deleteTargetId}
                          openDelete={openDelete}
                          fetchPosts={fetchPosts}
                          handleCloseDelete={handleCloseDelete}/>
            <EditInfoDialog
                editInfoTarget={editInfoTarget}
                handleCloseEditInfo={handleCloseEditInfo}
                fetchPosts={fetchPosts}
                openEditInfo={openEditInfo}
            />
        </>
    );
}
