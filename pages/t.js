import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from 'react'

export default function T() {
    const { scrollY } = useViewportScroll();
    const translateY = useTransform(scrollY, [0, window.innerHeight], [0, -200]);
    const rotateZ = useTransform(scrollY, [0, window.innerHeight], [0, 30]);

    return (
        <div>
            <div style={{ height: "200vh" }}>
                <motion.div
                    style={{ y: translateY, rotateZ: `${rotateZ}deg` }}
                    className="parallax-layer"
                >
                    {/* Your content */}
                </motion.div>
            </div>
        </div>
    )
}
