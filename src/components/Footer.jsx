const Footer = () => {
    return (
        // Container for the footer, positioned at the bottom of the viewport
        <div className="absolute bottom-0 w-full flex justify-center">
            {/* Footer content with padding, text size, and color */}
            <div className="py-6 text-sm text-center dark:text-white">
                {/* Footer message */}
                Thank you for exploring my portfolio!
            </div>
        </div>
    );
}

export default Footer;
