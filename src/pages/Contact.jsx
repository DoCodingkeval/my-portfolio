import { useFormik, emailjs, Validation } from '../imports/Files';
import Container from '../components/Container';

const Contact = () => {
    const initialValues = {
        name: '',
        email: '',
        url: '',
        message: '',
    };

    const { errors, values, handleChange, handleSubmit, touched } = useFormik({
        initialValues,
        validationSchema: Validation,
        onSubmit: (values, action) => {
            action.resetForm();

            const userValues = {
                name: values.name,
                email: values.email,
                url: values.url,
                message: values.message,
            };

            const Service_Id = import.meta.env.VITE_SERVICE_ID;
            const Public_Key = import.meta.env.VITE_PUBLIC_KEY;
            const Template_Id = import.meta.env.VITE_TEMPLATE_ID;

            emailjs
                .send(Service_Id, Template_Id, userValues, Public_Key)
                .then(() => {
                    console.log('success');
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    });

    return (
        <section
            className="w-full overflow-hidden"
            id="contact"
        >
            <Container>
                <div className="grid lg:grid-cols-2 max-lg:gap-16">
                    <div
                        className="relative bg-[#d3d3d3]/20 max-lg:order-1 rounded-xl p-8 md:p-10 border-6 border-offblack shadow-[8px_8px_0_var(--color-offblack)]"
                    >
                        <form onSubmit={handleSubmit}>
                            <>
                                <Input
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                />
                                {errors.name && touched.name && (
                                    <p className="-translate-y-5 text-coral">
                                        {errors.name}
                                    </p>
                                )}
                            </>
                            <>
                                <Input
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                />
                                {errors.email && touched.email && (
                                    <p className="-translate-y-5 text-coral">
                                        {errors.email}
                                    </p>
                                )}
                            </>
                            <>
                                <textarea
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    placeholder="How can i help?"
                                    rows={6}
                                    className="mb-4 w-full resize-none px-4 xl:text-lg py-2 text-base outline-none border-2 border-offblack shadow-[4px_4px_0_var(--color-offblack)] rounded-lg placeholder:text-[#666] placeholder:tracking-tight placeholder:font-medium xl:mb-5 xl:py-3 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-zinc-900"
                                ></textarea>
                                {errors.message && touched.message && (
                                    <p className="-translate-y-5 text-coral">
                                        {errors.message}
                                    </p>
                                )}
                            </>
                            <button
                                type="submit"
                                className="w-full relative gap-3 md:text-lg mt-2 cursor-pointer border-3 border-offblack rounded-lg shadow-[5px_5px_0_var(--color-offblack)] bg-offblack text-white hover:shadow-none hover:translate-0.5 px-4 py-1.5 text-base font-medium duration-300 xl:py-3"
                            >
                                Send Message
                            </button>
                        </form>
                        {/* <div className="mt-6 flex items-center gap-5 xl:absolute xl:right-0 xl:bottom-0">
                        {socialLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                target="_blank"
                                className="grid size-9 xl:size-11 place-items-center border-2 border-black shadow-[3px_3px_0px_#000] transition-all duration-200 hover:scale-110 hover:bg-black hover:text-white dark:border-zinc-800 dark:shadow-zinc-900 dark:hover:bg-zinc-900"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div> */}
                    </div>
                    <div className='place-items-end'>
                        <span className='stroke-text text-8xl lg:text-9xl'>04</span>
                        <h2 className="text-2xl md:text-[40px] lg:text-5xl dark:text-[#f9fafb] mt-5 mb-3">
                            Get in Touch
                        </h2>
                        <p className='text-base md:text-lg text-right lg:text-xl'>“I usually reply within 24 hours.”</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};
const Input = ({ type, name, value, onChange, placeholder }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full border-2 outline-none border-offblack shadow-[4px_4px_0_var(--color-offblack)] rounded-lg xl:text-lg px-4 py-2 text-base placeholder:text-[#666] placeholder:tracking-tight placeholder:font-medium not-last:mb-8 xl:py-3 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-zinc-900"
        />
    )
};
export default Contact;
