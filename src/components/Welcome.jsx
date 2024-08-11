const Welcome = () => {
    return (
        <div className="mockup-code">
            {/* Displaying a welcome message */}
            <pre data-prefix="$"><code>Welcome to My Portfolio</code></pre>
            
            {/* Displaying a tagline with a warning style */}
            <pre data-prefix=">" className="text-warning">
                <code>Where Creativity Meets Code</code>
            </pre>
            
            {/* Displaying a description with a success style */}
            <pre data-prefix=">" className="text-success">
                <code>Crafting innovative solutions through coding.</code>
            </pre>
        </div>
    );
};

export default Welcome;
