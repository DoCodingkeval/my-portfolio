import Container from '../components/Container';
import { coreSkills, skills } from '../constants';

const Skill = () => {
    return (
        <section
            className="w-full"
            id="skill"
        >
            <Container>
                <div className='mb-16 place-items-end'>
                    <span className='stroke-text text-8xl lg:text-9xl'>02</span>
                    <h2 className="text-2xl md:text-[40px] lg:text-5xl dark:text-[#f9fafb] mt-5 mb-3">
                        Skills & Technologies
                    </h2>
                    <p className='text-base sm:max-w-3/4 md:text-lg lg:text-xl text-right'>"Tools I use to build modern & user-focused web applications."</p>
                </div>
                <div className='grid md:grid-cols-2 gap-10 mt-20'>
                    <div className='space-y-5'>
                        <h3 className='text-xl md:text-2xl font-semibold border-b-4 w-max mb-8'>Core Frontend Skills</h3>
                        <div className='grid lg:grid-cols-2 gap-4'>
                            {coreSkills.map((skill, index) => (
                                <div className='bg-[#d3d3d3]/20 text-black flex gap-1 py-3.5 px-5 justify-between items-center border-4 border-offblack rounded shadow-[4px_4px_0_var(--color-offblack)] transition ease-in-out duration-300 hover:shadow-none hover:translate-0.5' key={skill.id || index}>
                                    {skill.icon}
                                    <span className='font-bold uppercase tracking-wide text-lg'>{skill.item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <h3 className='text-xl md:text-2xl font-semibold border-b-4 w-max mb-8'>Styling & Frameworks</h3>
                        <div className='grid lg:grid-cols-2 gap-4'>
                            {skills.map((skill, index) => (
                                <div className='bg-[#d3d3d3]/20 text-black flex gap-1 py-3.5 px-5 justify-between items-center border-4 border-offblack rounded shadow-[4px_4px_0_var(--color-offblack)] transition ease-in-out duration-300 hover:shadow-none hover:translate-0.5' key={skill.id || index}>
                                    {skill.icon}
                                    <span className='font-bold uppercase tracking-wide text-lg'>{skill.item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Skill;
