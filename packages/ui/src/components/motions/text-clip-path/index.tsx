'use client';

import React, { useEffect, useRef } from 'react';
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';

export type TextClipPathProps = {
    stickyFooter?: React.ReactNode;
}

export function TextClipPath({ stickyFooter }: TextClipPathProps) {
    const container = useRef<HTMLDivElement>(null);
    const paths = useRef<SVGTextPathElement[]>([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    });

    useEffect(() => {
        scrollYProgress.on('change', (e: number) => {
            paths.current.forEach((path, i) => {
                path.setAttribute('startOffset', `${-40 + i * 40 + e * 40}%`);
            });
        });
    }, [scrollYProgress]);

    return (
        <div ref={container}>
            <svg className='mb-40 w-full' viewBox='0 0 250 90'>
                <path fill='none' id='curve' d='m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68' />
                <text className='text-[6px] uppercase' style={{ fill: '#6B7280' }}>
                    {[...Array(3)].map((_, i) => {
                        return (
                            <textPath
                                key={i}
                                ref={(ref: SVGTextPathElement | null) => {
                                    if (ref) paths.current[i] = ref;
                                }}
                                startOffset={`${i * 40}%`}
                                href='#curve'>
                                {'Hubungkan ke orang terdekatmu'}
                            </textPath>
                        );
                    })}
                </text>
            </svg>
            {stickyFooter && stickyFooter}
        </div>
    );
}

