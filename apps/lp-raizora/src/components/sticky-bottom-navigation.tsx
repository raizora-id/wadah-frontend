import React, { useState } from 'react';

const Arrow = ({ ...props }) => {
    return (
        <svg width='12' height='12' viewBox='0 0 12 12' fill='none' {...props}>
            <g id='Img'>
                <path id='Vector' d='M2 5L6 8L10 5' stroke='white' strokeWidth='1.0625' strokeLinejoin='round' />
            </g>
        </svg>
    );
};

function StickyBottomNavigation() {
    const [learnVisible, setLearnVisible] = useState(false);

    const toggleLearnVisibility = () => {
        setLearnVisible(!learnVisible);
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (learnVisible) {
            root?.style.setProperty('--border-radius--menu-wrapper', '50px');
            root.style.setProperty('--border-radius--menu-link', '192px');
        } else {
            root.style.setProperty('--border-radius--menu-wrapper', '32px');
            root.style.setProperty('--border-radius--menu-link', '23px');
        }
        toggleLearnVisibility();
    };

    return (
        <nav className='transition-custom fixed bottom-12 flex max-w-full flex-col gap-x-2 gap-y-2 rounded-[var(--border-radius--menu-wrapper)] border border-solid border-[#222325] bg-[rgba(26,27,30,0.4)] p-[9px] max-sm:p-[5px]'>
            {learnVisible && (
                <div className='animateNav transition-custom flex max-w-full flex-col gap-x-6 gap-y-6 overflow-hidden rounded-[23px] bg-[#1a1b1e] p-0'>
                    <div className='mx-6 mt-6 border-b border-solid border-b-[#222325] pb-[13px] text-[10px] leading-[120%] text-[#313235]'>
                        LEARN
                    </div>
                    <div className='mx-6 mb-6 grid auto-cols-[1fr] grid-cols-[1fr_1fr_1fr] grid-rows-[auto_auto] justify-items-center gap-x-4 gap-y-4'>
                        <a
                            href='#'
                            className='text-center text-sm leading-[142.857%] font-normal text-white no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:underline max-sm:text-xs max-sm:leading-none'>
                            Navigation Link
                        </a>
                        <a
                            href='#'
                            className='text-center text-sm leading-[142.857%] font-normal text-white no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:underline max-sm:text-xs max-sm:leading-none'>
                            Navigation Link
                        </a>
                        <a
                            href='#'
                            className='text-center text-sm leading-[142.857%] font-normal text-white no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:underline max-sm:text-xs max-sm:leading-none'>
                            Navigation Link
                        </a>
                        <a
                            href='#'
                            className='text-center text-sm leading-[142.857%] font-normal text-white no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:underline max-sm:text-xs max-sm:leading-none'>
                            Navigation Link
                        </a>
                        <a
                            href='#'
                            className='text-center text-sm leading-[142.857%] font-normal text-white no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:underline max-sm:text-xs max-sm:leading-none'>
                            Navigation Link
                        </a>
                        <a
                            href='#'
                            className='text-center text-sm leading-[142.857%] font-normal text-white no-underline transition-all duration-[0.2s] ease-[ease-in-out] hover:underline max-sm:text-xs max-sm:leading-none'>
                            Navigation Link
                        </a>
                    </div>
                </div>
            )}
            <div className='transition-custom flex w-full justify-between gap-x-2 gap-y-2 overflow-auto rounded-[var(--border-radius--menu-link)] bg-[#1a1b1e] p-3 max-md:gap-1 max-sm:p-2'>
                <a href='/' className='menuLink'>
                    Home
                </a>

                <a href='/about' className='menuLink'>
                    About
                </a>

                <a href='/works' className='menuLink'>
                    Works
                </a>

                <button className='menuLink' onClick={handleClick}>
                    Learn <Arrow />
                </button>

                <a href='/contact' className='menuLink bg-[#36353a] hover:bg-[#fff] hover:text-[#111]'>
                    Let's Talk
                </a>
            </div>
        </nav>
    );
}

export default StickyBottomNavigation;
