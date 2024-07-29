'use client'
import React from "react";
import {
    DialogContent,
    DialogContentText,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import {toast} from "react-toastify";
import axios from "axios";
import {useState} from "react";


export default function DeleteDialog(props) {
    const [loadingButton,setLoadingButton] = useState(false)

    const deleteData = async () =>{
        setLoadingButton(true)
        try {
            const res = await axios.delete(`/api/posts/${props.deleteTargetId}`);
            if (res.status === 201) {
                toast.success("پست با موفقیت حذف شد")
            }
        } catch (error) {
            toast.error("سیستم با خطا رو به رو شده است")
        }
        setLoadingButton(false)
        props.handleCloseDelete()
        props.fetchPosts()
    }

    return(
        <>
            <Dialog
                fullWidth={true}
                open={props.openDelete}
                keepMounted
                // onClose={props.handleCloseDelete}
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    style: {
                        fontFamily: "__IranSans_f48dd2",
                    },
                }}>
                <DialogContent>
                    <DialogContentText style={{ fontFamily: "__IranSans_f48dd2" }}>
                        <div className="flex justify-end">
                            <button onClick={props.handleCloseDelete}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14" fill="none">
                                    <path d="M13 1L1 13M1 1L13 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex justify-center mb-7">
                            <h3 className="text-[1.2rem]">حذف</h3>
                        </div>
                        <div className="flex  justify-center">
                            <h2 >آیا از حذف این پست مطمئن هستید؟</h2>
                        </div>
                        <div className="flex justify-center mt-10 gap-4">
                            <div>
                                {
                                    loadingButton ? (
                                        <button onClick={deleteData} disabled
                                                className="px-6 py-2 text-[0.8rem] rounded-[0.5rem] py-3  hover:opacity-80 font-bold  bg-neutral-400 text-white">حذف
                                        </button>
                                    ) : (
                                        <button onClick={deleteData}
                                                className="px-6 py-2 text-[0.8rem] rounded-[0.5rem] py-3  hover:opacity-80 font-bold  bg-red-600 text-white">حذف
                                        </button>
                                    )
                                }
                            </div>
                            <div>
                                <button onClick={props.handleCloseDelete} className="px-6 py-2 text-[0.8rem]  rounded-[0.5rem] py-3  hover:opacity-80 font-bold bg-neutral-400 text-white">بستن</button>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}