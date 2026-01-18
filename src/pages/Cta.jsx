import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Cta = () => {
    useGSAP(() => {
        const tl = gsap.to(".cta", {
            rotate: 360,
            ease: "none",
            delay: 1,
            duration: 10,
            repeat: -1,
        })
        gsap.set(".cta", { cursor: "pointer" });
    }, []);
    return (
        <section className='py-0! overflow-hidden'>
            <div className="grid sm:grid-cols-[70%_30%] lg:grid-cols-[75%_25%]">
                <div className="flex max-lg:flex-wrap max-lg:gap-5 items-center bg-[#d3d3d3]/70 text-[#252525] p-8">
                    <h2 className='text-3xl md:text-4xl xl:text-6xl font-medium lg:basis-3/4 lg:max-w-3/4 md:leading-12 lg:leading-13 xl:leading-18'>Have an idea? Let’s build something meaningful together.</h2>
                    <a href="mailto:gohelkeval7@gmail.com" _target="blank" className='bg-white rounded-full flex items-center gap-3 justify-center py-5 px-7 xl:text-xl font-medium border-2 border-offblack shadow-[4px_4px_0_var(--color-offblack)] relative before:content-[""] before:bg-offcoral before:absolute before:-bottom-full before:left-0 before:size-full hover:before:bottom-0 before:-z-10 z-10 before:rounded-full hover:before:rounded-none before:transition-all before:duration-300 overflow-hidden transition-all duration-300 hover:translate-0.5 hover:shadow-[2px_2px_0_#000]' title='Mail Me'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="flex-shrink-0" fill="none" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5" />
                            <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" />
                        </svg>
                        gohelkeval7@gmail.com
                    </a>
                </div>
                <div className="bg-offblack grid place-items-center py-5 md:py-14">
                    <img src="/cta.webp" className='inline-block max-w-full w-1/4 sm:w-1/2 md:w-3/6 h-auto cta' alt="cta" />
                </div>
            </div>
        </section>
    )
}

export default Cta
