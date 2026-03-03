const GridBg = () => (
    <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
            backgroundImage:
                "linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)",
            WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)",
            maskComposite: "intersect" as never,
            WebkitMaskComposite: "source-in",
        }}
    />
);

export default GridBg;
