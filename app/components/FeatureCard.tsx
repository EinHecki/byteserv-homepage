function FeatureCard({title, description, emoji, features}: {
    title: string;
    description: string;
    emoji: string,
    features: string[]
}) {
    return (
        <div
            className="bg-white/10 border border-white/20 border-t-4 border-t-sky-600 rounded-2xl p-5 sm:p-6 flex flex-col backdrop-blur-md backdrop-saturate-150 shadow-lg shadow-black/10">
            <div className="flex flex-row items-start sm:items-center mb-3 sm:mb-4">
                <div className="text-3xl sm:text-5xl mb-2 sm:mb-0 mr-3 sm:mr-4">{emoji}</div>
                <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
            </div>
            <p className="mb-4 text-sm sm:text-base">{description}</p>
            <ul className="list-disc list-inside space-y-1 text-left text-sm sm:text-base">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
}

export default FeatureCard;