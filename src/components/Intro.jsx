import Navigator from "./Navigator";
import Welcome from "./Welcome";

const Intro = () => {
    return (
        <div>
            {/* Main heading of the intro section */}
            <h1 className="text-4xl flex justify-center mt-[4%] font-bold leading-none sm:text-5xl">
                {/* Text within the heading */}
                <span className="dark:white">"Hello, I'm Aman"</span>
            </h1>
            
            {/* Container for the content below the heading */}
            <div className="mt-[10%]">
                {/* Flex container to arrange Navigator and Welcome components side by side */}
                <div className="flex">
                    {/* Navigator component within a card layout */}
                    <div className="py-11 card bg-base-300 rounded-box grid flex-grow place-items-center w-[60%]">
                        <Navigator />
                    </div>
                    
                    {/* Divider between Navigator and Welcome components */}
                    <div className="divider divider-horizontal"></div>
                    
                    {/* Welcome component within a card layout */}
                    <div className="container py-11 card bg-base-300 rounded-box grid flex-grow place-items-center">
                        <Welcome />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
