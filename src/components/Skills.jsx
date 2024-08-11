import { Link } from "react-router-dom";

const Skills = () => {
    return (
        <div className="hero min-h-screen"
            style={{
                backgroundImage: 'url(https://images8.alphacoders.com/136/thumb-1920-1363709.png)',
            }}>
            <div className="overflow-x-auto my-16 px-16 w-screen hero-overlay bg-opacity-60">
                {/* Main title for the Skills section */}
                <h1 className="text-4xl flex justify-center mt-[4%] font-bold leading-none sm:text-5xl mb-[7%]">
                    <span className="dark:text-white">Skills</span>
                </h1>

                {/* Skills table */}
                <table className="table bg-t">
                    {/* Table head */}
                    <thead>
                        <tr className="bg-gray-950 hover">
                            <th></th>
                            <th>Languages</th>
                            <th>Libraries / Frameworks / IDE</th>
                            <th>Developer Tools</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Row 1 */}
                        <tr className="hover">
                            <th>1</th>
                            <td>C</td>
                            <td>React.js</td>
                            <td>GitHub</td>
                        </tr>
                        {/* Row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>C++</td>
                            <td>Tailwind CSS</td>
                            <td>Parcel</td>
                        </tr>
                        {/* Row 3 */}
                        <tr className="hover">
                            <th>3</th>
                            <td>JavaScript</td>
                            <td>Axios</td>
                            <td>Render</td>
                        </tr>
                        {/* Row 4 */}
                        <tr className="hover">
                            <th>4</th>
                            <td>HTML</td>
                            <td>Node.js</td>
                            <td>Git</td>
                        </tr>
                        {/* Row 5 */}
                        <tr className="hover">
                            <th>5</th>
                            <td>CSS</td>
                            <td></td>
                            <td></td>
                        </tr>
                        {/* Row 6 */}
                        <tr className="hover">
                            <th>6</th>
                            <td>Python</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Button to navigate back to the home page */}
            <Link to='/'>
                <button className="btn btn-primary mt-[300%]">Go To Home</button>
            </Link>
        </div>
    );
};

export default Skills;
