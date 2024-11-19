"use client";

import FourCorePilars from "./FourCorePilars";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhatWeDoPage() {

    useEffect(() => {
    AOS.init({
         duration: 500,
         once: false,
       })
 }, [])

    return (
        <div>
            <FourCorePilars/>
        </div>
    );
}