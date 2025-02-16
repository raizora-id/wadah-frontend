'use client';

import { useRef } from 'react';

import './style.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LogoIntro() {
    const scene = useRef(null);

    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start start', 'end end']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], ['300px', '5000px']);

    return (
        <>
            <div style={{ height: '2vh' }}></div>
            <div className='main' ref={scene}>
                <motion.div className='mask' style={{ maskSize: imageScale }}>
                    <img src='https://blog.olivierlarose.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.a565eeaf.jpg&w=750&q=75' />
                </motion.div>
            </div>
        </>
    );
}
