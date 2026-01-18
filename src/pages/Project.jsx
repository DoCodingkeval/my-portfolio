import Card from '../components/Card';
import { IconExternalLink } from '@tabler/icons-react';
import { projects, Lens } from '../imports/Files';
import Container from '../components/Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)
const Project = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add({
            desktop: "(min-width: 1024px)",
            mobile: "(max-width: 1023px)",
        }, (context) => {
            const { mobile } = context.conditions;
            const cards = gsap.utils.toArray(".project-card");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".project-section",
                    pin: true,
                    scrub: true,
                    start: mobile ? "28% top" : "top top",
                    end: "+=" + cards.length * 1000,
                    invalidateOnRefresh: true,
                },
            })
            tl.to(".project-card1", {
                y: "-150vh",
            }, "card1-2")
                .to(".project-card2", {
                    rotate: 0,
                }, "card1-2").to(".project-card2", {
                    y: "-150vh"
                }, "card-3").to(".project-card3", {
                    rotate: 0,
                }, "card-3").to(".project-card3", {
                    y: "-150vh"
                }, "card-4").to(".project-card4", {
                    rotate: 0,
                }, "card-4")
        })
        return ()=> mm.revert();
    }, []);
    return (
        <section
            className="w-full project-section overflow-hidden"
            id="project"
        >
            <Container>
                <div className='grid lg:grid-cols-[40%_40%] place-items-center gap-x-40 h-full gap-y-20'>
                    <div className='mb-16 w-full'>
                        <span className='stroke-text text-8xl lg:text-9xl'>01</span>
                        <h2 className="text-2xl md:text-[40px] lg:text-5xl w-max dark:text-[#f9fafb] mt-5 mb-3">
                            Featured Projects
                        </h2>
                        <p className='text-base md:text-lg lg:text-xl'>"Selected work I’m proud of."</p>
                    </div>
                    <div className="project-wrapper space-y-20 relative text-black dark:text-neutral-300">
                        {projects.map((project) => (
                            <Card key={project.id} className={`max-w-lg lg:max-w-3xl mx-auto project-card not-first:absolute top-0 ${project.class}`}>
                                <Lens>
                                    <img
                                        src={project.image}
                                        className="rounded-xl project-image"
                                        alt={project.projectName}
                                        loading="lazy"
                                    />
                                </Lens>
                                <div className='space-y-4'>
                                    <span className="text-4xl lg:text-5xl mb-5 inline-block text-neutral-800">{`0${project.id}`}</span>
                                    <h3 className="text-xl xl:text-2xl font-semibold tracking-tight font-space">
                                        {project.projectName}
                                    </h3>
                                    <p className="text-neutral-700 text-sm md:text-base leading-relaxed">{project.description}</p>
                                </div>
                                <div className="flex items-center gap-4 py-2">
                                    <a href={project.liveLink} target="_blank" className='size-10 border-3 rounded-md shadow-[3px_3px_0_#000] grid place-items-center hover:translate-0.5 duration-200 hover:shadow-none hover:bg-black group' title={project.siteTitle}>
                                        <IconExternalLink size={22} className='group-hover:stroke-white transition duration-300 ease-in-out' />
                                    </a>
                                    <a href={project.githubLink} target="_blank" className='size-10 border-3 rounded-md shadow-[2px_2px_0_#000] grid place-items-center hover:translate-0.5 duration-200 hover:shadow-none hover:bg-black group' title={project.githubTitle}>
                                        <svg className='group-hover:stroke-white transition duration-300 ease-in-out' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#000" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" />
                                            <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" />
                                        </svg>
                                    </a>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Project;
