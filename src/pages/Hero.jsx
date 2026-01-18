import Container from "../components/Container"
import Avatar from '../components/Avatar';
import { socialLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Hero = () => {
    const container = useRef();
    useGSAP(() => {
        gsap.from(".hero-shape", {
            rotateZ: 360,
            repeat: -1,
            duration: 6,
            ease: "none",
            yoyo: true,
        });
    }, [], {scope: container});
    return (
        <section
            className="hero-section"
            id="hero"
        >
            <Container ref={container}>
                <div className='hero-card'>
                    <img src="/roundedcircle.svg" alt="shape" fetchPriority="high" className="hero-shape -z-10 absolute -bottom-20 sm:-bottom-26 right-2/3 lg:bottom-30 size-34 sm:size-42 lg:-right-30" />
                    <div>
                        <Avatar />
                        <h1 className='my-name'>Keval Gohel</h1>
                        <button className='job-btn'>{`<> Associate Software Engineer`}</button>
                        <p className='max-sm:hidden md:max-w-2xl md:text-base leading-[1.8] max-md:mb-8'>
                            Passionate about technology, I specialize in Web Development and Design. I focus on creating innovative solutions, growing my skills, and contributing to impactful projects.
                        </p>
                        <p className='text-base sm:hidden max-sm:mb-8'>
                            Web developer focused on UI, motion & performance.
                        </p>
                    </div>
                    <div className='grid max-md:grid-cols-3 gap-6 lg:mr-5'>
                    {socialLinks.map((link, index) => (
                            <a key={link.id || index} title={link.title} href={link.href} className='hero-social-links group'>
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
