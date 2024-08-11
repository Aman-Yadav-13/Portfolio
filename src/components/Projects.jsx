import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className="hero min-h-screen bg-fixed"
            style={{
                backgroundImage: 'url(https://images8.alphacoders.com/135/thumb-1920-1354210.jpeg)',
            }}>
            <div className="hero-overlay bg-opacity-60">
                {/* Main title of the Projects section */}
                <h1 className="text-4xl flex justify-center font-bold leading-none sm:text-5xl mt-[4%] mb-[7%]">
                    <span className="dark:text-white">Projects</span>
                </h1>

                {/* Timeline to list projects */}
                <ul className="timeline timeline-vertical">
                    {/* Project 1 */}
                    <li>
                        <div className="timeline-start timeline-box hover:bg-black bg-inherit">
                            <h1 className="ml-[40%] mb-5">Job Board</h1> 
                            <p>Job Board is a platform where companies post job openings, and job seekers apply for positions. Job seekers can share their skill sets, and the platform provides them with relevant job posts and employer information, allowing them to get in touch with potential employers. Employers can post jobs, specifying the job title, description, and required skill set.</p>
                            <a href="https://job-board-nine-amber.vercel.app/">
                                <button className="btn mt-2 ml-[38%]">Checkout</button>
                            </a>
                        </div>
                        <div className="timeline-middle">
                            {/* Icon for the timeline */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <hr />
                    </li>
                    {/* Project 2 */}
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            {/* Icon for the timeline */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box hover:bg-black bg-inherit">
                            <h1 className="ml-[40%] mb-5">To Do List</h1> 
                            <p>The To-Do List is a web application designed to help users organize and manage their tasks efficiently. Built with React and styled using Tailwind CSS, this application provides a user-friendly interface for creating, updating, and deleting tasks. Whether you need to track daily chores, work projects, or any other tasks, the To-Do List app helps you stay organized and on top of your responsibilities.</p>
                            <a href="https://to-do-list-nine-red.vercel.app/">
                                <button className="btn mt-2 ml-[38%]">Checkout</button>
                            </a>
                        </div>
                        <hr />
                    </li>
                    {/* Project 3 */}
                    <li>
                        <hr />
                        <div className="timeline-start timeline-box hover:bg-black bg-inherit">
                            <h1 className="ml-[40%] mb-5">Kanban Board</h1> 
                            <p>A Kanban board is a visual project management tool designed to help teams visualize work, maximize efficiency, and improve workflow. Originating from the Japanese manufacturing system, Kanban boards are now widely used in various industries to manage both simple and complex tasks.</p>
                            <a href="https://aman-yadav-13.github.io/Kanban-Board/">
                                <button className="btn mt-2 ml-[40%]">Checkout</button>
                            </a>
                        </div>
                        <div className="timeline-middle">
                            {/* Icon for the timeline */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <hr />
                    </li>
                    {/* Project 4 */}
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            {/* Icon for the timeline */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box hover:bg-black bg-inherit">
                            <h1 className="ml-[40%] mb-5">Text to Speech Converter</h1> 
                            <p>A basic Text-to-Speech (TTS) converter is a simple software tool that transforms written text into spoken words. This technology enables computers and other devices to read out text aloud, making information more accessible and improving user interaction.</p>
                            <a href="https://aman-yadav-13.github.io/Text-to-Speech-converter/">
                                <button className="btn mt-2 ml-[45%]">Checkout</button>
                            </a>
                        </div>
                        <hr />
                    </li>
                    {/* Project 5 */}
                    <li>
                        <hr />
                        <div className="timeline-start timeline-box hover:bg-black bg-inherit">
                            <h1 className="ml-[36%] mb-5">Speech Colour Changer</h1> 
                            <p>A Speech Color Changer is an interactive application that combines voice recognition with visual effects to create a dynamic user experience. This tool listens to spoken words and changes the color of specific elements on the screen based on the recognized speech.</p>
                            <a href="https://aman-yadav-13.github.io/Speech-Color-Changer/">
                                <button className="btn mt-2 ml-[42%]">Checkout</button>
                            </a>
                        </div>
                        <div className="timeline-middle">
                            {/* Icon for the timeline */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                    </li>
                    {/* Button to go back to home */}
                    <li className="flex justify-center m-16">
                        <div>
                            <Link to='/'>
                                <button className="btn btn-primary">Go To Home</button>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Projects;
