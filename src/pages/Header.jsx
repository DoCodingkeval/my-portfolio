import { useEffect, useRef, useState } from 'react';
import Hamburger from '../components/Hamburger';
import { motion } from 'motion/react';
import Container from '../components/Container';
import FullPageNav from './FullPageNav';

const Header = () => {
    const [icon, setIcon] = useState('');
    const [shadow, setShadow] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const header = useRef(null);

    const handleThemeChange = () => {
        const isDark = document.documentElement.classList.contains('dark');

        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIcon('light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIcon('dark');
        }
    };

    useEffect(() => {
        const theme = localStorage.getItem('theme');

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setIcon('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setIcon('light');
        }
    });

    useEffect(() => {
        const updateHeaderHeight = () => {
            if (header.current) {
                const height = header.current.offsetHeight;
                document.documentElement.style.setProperty("--top", `${height}px`);
            }
        }
        updateHeaderHeight();
        new ResizeObserver(updateHeaderHeight).observe(document.body);
        document.body.style.overflow = showMenu ? "hidden" : "";
        const onScroll = () => {
            let height = 50;
            if (window.scrollY > height) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [showMenu]);

    return (
        <>
            <FullPageNav setShowMenu={setShowMenu} showMenu={showMenu} />
            <header ref={header} className={`header w-full transition-all duration-200 dark:border-zinc-800 dark:bg-[#08090a] ${shadow ? 'backdrop-blur-xs' : ""}`}>
                <Container>
                    <motion.nav
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative flex w-full items-center justify-between py-5 text-xs md:text-sm"
                    >
                        <a href="#" title='KG' className="text-2xl xl:text-3xl font-extrabold">
                            KG
                        </a>
                        <div className='flex items-center gap-3'>
                            <span className='text-lg text-neutral-700 tracking-wide'>{showMenu ? "CLOSE" : "MENU"}</span>
                            <Hamburger showMenu={showMenu} onClick={() =>
                                setShowMenu(!showMenu)
                            } />
                        </div>
                    </motion.nav>
                </Container>
            </header>
        </>
    );
};

export default Header;
