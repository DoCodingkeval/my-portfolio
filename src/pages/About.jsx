import gsap from 'gsap';
import Container from '../components/Container';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, SplitText);
const About = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add({
            mobile: "(max-width: 767px)",
            any: "all"
        }, (context) => {
            const { mobile } = context.conditions;
            const aboutMe = SplitText.create(".about-me", { type: "words" });
            gsap.from(aboutMe.words, {
                scrollTrigger: {
                    trigger: ".about-section",
                    scrub: 1,
                    pin: true,
                    start: mobile ? "top top" : "top top",
                    end: "+=1500",
                    invalidateOnRefresh: true
                },
                opacity: .4,
                duration: 2,
                ease: "power1.out",
                filter: "blur(1px)",
                stagger: {
                    each: 0.2,
                    from: "start",
                    ease: "power2.inOut"
                },
            })
        })
    }, [])
    return (
        <section
            className="overflow-hidden about-section"
            id="about"
        >
            <Container>
                <div className='mb-10 lg:mb-16'>
                    <span className='stroke-text text-8xl lg:text-9xl'>03</span>
                    <h2 className="text-2xl md:text-[40px] lg:text-5xl w-max dark:text-[#f9fafb] mt-5 mb-3">
                        About Me
                    </h2>
                    <p className='text-base md:text-lg lg:text-xl'>"I build clean & scalable interfaces."</p>
                </div>
                <div className="relative">
                    <p className="text-gray about-me text-base md:text-lg xl:text-xl leading-9 md:leading-11">
                        I’m an associate software engineer with a strong interest in web technologies
                        I enjoy turning ideas into clean, responsive, and functional websites. Always learning, always improving. I always like to explore and learn new technologies that add value to my skills and career.
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default About;
