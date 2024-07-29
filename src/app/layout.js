import "../style/globals.css";
import "../style/spinnerLoading.css"
import localFont from 'next/font/local'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'

const IranSans = localFont({
    src: [
        {
            path: '../fonts/IRANSans(FaNum)_Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/IRANSans(FaNum).ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/IRANSans(FaNum)_Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/IRANSans(FaNum)_Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
})

export const metadata = {
    title: "Blog App",
    description: "Blog App",
};

export default function RootLayout({children}) {
    return (
        <html lang="fa" className={IranSans.className}>
        <body>
            {children}
            <ToastContainer position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={true}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"/>
        </body>
        </html>
    );
}
