import { Suspense } from 'react';
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
function App() {
    return (
        <>
            <Header />
            <main
                className="relative z-10 xl:px-0 selection:bg-black selection:text-gray dark:selection:bg-neutral-800 dark:selection:text-neutral-300"
            >
                <Hero />
                <Suspense fallback={<p>Loading...</p>}>
                    <Project />
                    <Skill />
                    <About />
                    <Cta />
                    <Contact />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}

export default App;
