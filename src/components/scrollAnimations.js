"use client"

import { useEffect } from "react"
import { initSal } from "@/utils/sal"

export default function ScrollAnimations() {
    useEffect(() => {
        initSal()
    }, [])

    return null
}
