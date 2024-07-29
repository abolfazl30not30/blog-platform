"use client"
import Navbar from "@/component/home/Navbar";

import {CacheProvider} from "@emotion/react";
import {prefixer} from 'stylis';
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";



const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});


export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="px-7 md:px-20 ">
          <CacheProvider value={cacheRtl}>
              {children}
          </CacheProvider>
      </div>
    </>
  );
}
