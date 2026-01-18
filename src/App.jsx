import { Suspense, useEffect, useState } from 'react';
import {
    Header,
    Hero,
    Skill,
    About,
    Project,
    Contact,
    Footer,
} from './imports/Files';
import Cta from './pages/Cta';
import Loader from './components/Loader';
function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }
    return (
        <Suspense fallback={<Loader />}>
            {loading ? <Loader /> : (
                <>
                    <Header />
                    <main
                        className="relative z-10 xl:px-0 selection:bg-black selection:text-gray dark:selection:bg-neutral-800 dark:selection:text-neutral-300"
                    >
                        <Hero />
                        <Project />
                        <Skill />
                        <About />
                        <Cta />
                        <Contact />
                    </main>
                    <Footer />
                </>
            )}

        </Suspense>
    );
}

export default App;
