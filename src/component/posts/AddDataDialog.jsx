'use client'

import React, {useEffect, useState} from "react";
import {
    DialogContent,
    DialogContentText, TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import * as yup from "yup";
import {useFormik} from "formik";
import axios from "axios";
import {toast} from "react-toastify";

export default function AddDataDialog(props) {

    const [loadingButton,setLoadingButton] = useState(false)

    const schema = yup.object().shape({
        title: yup.string().required("لطفا موضوع بلاگ را بنویسید"),
        content: yup.string().required("لطفا محتوا بلاگ را بنویسید"),
    });

    const formik = useFormik({
        initialValues: {
            title: "",
            content: "",
        },

        validationSchema: schema,

        onSubmit: async (blog, helpers) => {
            setLoadingButton(true)
            try {
                const res = await axios.post('/api/posts', blog);
                if (res.status === 201) {
                    toast.success("بلاگ با موفقیت ثبت شد")
                    handleReset()
                }
            } catch (error) {
                toast.error("سیستم با خطا رو به رو شده است")
            }
            setLoadingButton(false)
            props.handleCloseAddData()
            props.fetchPosts()
        },
    });

    const handleReset = () =>{
        formik.resetForm()
    }

    return (
        <>
            <Dialog
                fullWidth={true}
                open={props.openAddData}
                keepMounted
                // onClose={()=>{props.handleCloseAddData();handleReset()}}
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    style: {
                        fontFamily: "__IranSans_f48dd2",overflow:"visible"
                    },
                }}>
                <DialogContent>
                    <DialogContentText style={{fontFamily: "__IranSans_f48dd2"}}>
                        <div className="flex justify-end">
                            <button onClick={()=>{props.handleCloseAddData();handleReset()}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14"
                                     fill="none">
                                    <path d="M13 1L1 13M1 1L13 13" stroke="black" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex justify-center mb-7">
                            <h3 className="text-[1.1rem]">بلاگ جدید</h3>
                        </div>
                        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit} method="POST">
                            <div>
                                <TextField
                                    FormHelperTextProps={{style: {fontFamily: '__IranSans_f48dd2', fontSize: "0.7rem"}}}
                                    fullWidth
                                    label="موضوع بلاگ"
                                    type="text"
                                    name="title"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    error={formik.touched.title && Boolean(formik.errors.title)}
                                    helperText={formik.touched.title && formik.errors.title}
                                    inputProps={{style: {fontFamily: "__IranSans_f48dd2", fontSize: "0.8rem"}}}
                                    InputLabelProps={{style: {fontFamily: "__IranSans_f48dd2"}}}/>

                            </div>
                            <div>
                                <TextField
                                    FormHelperTextProps={{style: {fontFamily: '__IranSans_f48dd2', fontSize: "0.7rem"}}}
                                    fullWidth
                                    multiline
                                    rows={7}
                                    label="محتوای بلاگ"
                                    type="text"
                                    name="content"
                                    value={formik.values.content}
                                    onChange={formik.handleChange}
                                    error={formik.touched.content && Boolean(formik.errors.content)}
                                    helperText={formik.touched.content && formik.errors.content}
                                    inputProps={{style: {fontFamily: "__IranSans_f48dd2", fontSize: "0.8rem"}}}
                                    InputLabelProps={{style: {fontFamily: "__IranSans_f48dd2"}}}/>
                            </div>
                            <div>
                                {
                                    loadingButton ? (
                                        <button type="submit" disabled className="cursor-not-allowed bg-neutral-400 hover:opacity-70 w-full text-white py-3 rounded border border-mainBlue">
                                            ارسال
                                        </button>
                                    ) : (
                                        <button type="submit" className="bg-mainBlue hover:opacity-70 w-full text-white py-3 rounded border border-mainBlue">
                                            ارسال
                                        </button>
                                    )
                                }
                            </div>
                        </form>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}