'use client';

import React, { useEffect, useRef } from 'react';

import { TextClipPath } from '@packages/ui/components/motions/text-clip-path';

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';

interface LogosProps {
    scrollProgress: MotionValue<number>;
}

const Logos: React.FC<LogosProps> = ({ scrollProgress }) => {
    const y = useTransform(scrollProgress, [0, 1], [-700, 0]);
    return (
        <div className='h-[250px] overflow-hidden bg-black'>
            <motion.div style={{ y }} className='flex h-full items-center justify-center gap-10 bg-black p-10'>
                {[...Array(5)].map((_, i) => {
                    return (
                        <img
                            key={`img_${i}`}
                            alt={`logo ${i + 1}`}
                            className='h-[80px] w-[80px]'
                            src={`/medias/${i + 1}.jpg`}
                        />
                    );
                })}
            </motion.div>
        </div>
    );
};
export default function Footer() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    });

    return <TextClipPath stickyFooter={<Logos scrollProgress={scrollYProgress} />} />;
}
