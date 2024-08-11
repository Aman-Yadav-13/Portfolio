import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Intro from './components/Intro';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contactme from './components/Contactme';
import Footer from './components/Footer';

const root = createRoot(document.getElementById('root'));

// Create routes
const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Intro />
                <Footer />
            </>
        ),
    },
    {
        path: 'aboutme',
        element: (
            <>
                <Aboutme />
                <Footer />
            </>
        ),
    },
    {
        path: 'skills',
        element: (
            <>
                <Skills />
                <Footer />
            </>
        ),
    },
    {
        path: 'projects',
        element: (
            <>
                <Projects />
                <Footer />
            </>
        ),
    },
    {
        path: 'contactme',
        element: (
            <>
                <Contactme />
                <Footer />
            </>
        ),
    }
]);

// Render the application
root.render(<RouterProvider router={router} />);
