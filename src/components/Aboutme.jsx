import { Link } from "react-router-dom";

const Aboutme = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                // Setting the background image for the hero section
                backgroundImage: 'url(https://images.alphacoders.com/132/1327999.jpeg)',
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-[600px]">
                    {/* Main heading of the section */}
                    <h1 className="mt-[-30%] mb-11 text-5xl font-bold">Hello There, I’m Aman</h1>
                    {/* Description paragraph introducing yourself */}
                    <p className="mt-11">
                        Welcome to my portfolio! I am a passionate web developer with a strong foundation in front-end and back-end technologies. I specialize in creating dynamic, responsive websites and applications that deliver exceptional user experiences. With a keen eye for detail and a commitment to clean, efficient code, I bring both creativity and technical expertise to every project I undertake. Explore my work to see how I blend innovation with functionality to bring ideas to life.
                    </p>
                    {/* Button linking to the home page */}
                    <Link to='/'>
                        <button className="mt-[10%] btn btn-primary">Go To Home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;
