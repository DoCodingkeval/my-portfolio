import { useEffect, useRef } from 'react'
import { navLinks } from '../constants'

const FullPageNav = ({ setShowMenu, showMenu }) => {
    const fullPageNav = useRef(null);
    useEffect(() => {
        const fullPageNavfunc = () => {
            if (fullPageNav) {
                if (showMenu) {
                    fullPageNav.current.style.maxHeight = `${fullPageNav.current.scrollHeight}px`;
                } else {
                    fullPageNav.current.style.maxHeight = 0;
                }
            }
        }
        fullPageNavfunc();
        window.addEventListener("resize", fullPageNavfunc);
        return () => window.removeEventListener("resize", fullPageNavfunc);
    }, [showMenu])
    return (
        <div ref={fullPageNav} className="bg-primary fixed inset-0 w-full full-page-navigation z-50 transition-all delay-100 duration-1000 ease-[cubic-bezier(.075,.82,.165,1)] pointer-events-none">
            <div style={{ paddingTop: "var(--top)" }} className='max-w-7xl pb-5 px-6 mx-auto min-h-screen overflow-y-auto pointer-events-auto'>
                <ul className='space-y-8 w-full'>
                    {navLinks.map((link, index) => (
                        <li key={link.id || index} className='relative w-full group flex items-center will-change-transform overflow-hidden pointer-events-auto'>
                            <a onClick={() => setShowMenu(false)} href={`#${link.href}`} className='uppercase text-5xl md:text-6xl lg:text-7xl xl:text-8xl group-hover:scale-y-5 group-hover:-translate-y-full w-full inline-block transition-all ease-[cubic-bezier(.4,0,.2,1)] duration-500 pointer-events-auto'>{link.name}
                            </a>
                            <a onClick={() => setShowMenu(false)} href={`#${link.href}`} className='w-full flex items-center gap-5 font-times! transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] absolute left-0 top-0 translate-y-full group-hover:translate-y-0 text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase italic text-coral'>{link.name}
                                <svg width="56" height="41" viewBox="0 0 56 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.1452 39.3993C32.1876 39.4365 33.4872 39.721 35.0329 40.0313C36.5788 40.3415 37.8604 40.548 37.881 40.4903C37.9014 40.4326 38.0614 39.4955 38.2363 38.408C38.5876 36.2241 39.4383 33.6742 40.3473 32.0795C43.1807 27.1095 48.2642 23.8186 54.4299 22.9633L56 22.7454L56 20.5499L56 18.3543L54.5769 18.1457C45.2536 16.7798 39.1753 10.692 38.0382 1.58149C37.964 0.986581 37.8753 0.500001 37.8411 0.500001C37.5267 0.500001 32.3165 1.59654 32.218 1.6834C32.1467 1.74622 32.1997 2.30392 32.3359 2.92253C33.8436 9.7726 38.1605 15.3467 43.7624 17.6773L45.1062 18.2364L17.4733 18.2802L-1.87065e-06 18.308L-1.4961e-06 22.7514L17.5182 22.7792L45.086 22.8231L43.3895 23.5738C38.9884 25.521 35.504 29.3406 33.452 34.4676C32.8673 35.9282 31.985 39.2581 32.1452 39.3993Z" fill="currentcolor"></path>
                                </svg>
                            </a>
                            <span className={`inline-block w-full absolute bottom-0 left-0 ${index !== navLinks.length - 1 && "border-b"}`}></span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FullPageNav
