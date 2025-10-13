function Card({title, description, emoji}: {
    title: string;
    description: string;
    emoji: string,
}) {
    return (
        <div
            className="bg-white/10 border border-white/20 border-t-4 items-center border-t-sky-600 rounded-2xl p-6 flex flex-col backdrop-blur-md backdrop-saturate-150 shadow-lg shadow-black/10">
            <div className="text-5xl text-center mb-4">{emoji}</div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="mb-4">{description}</p>
        </div>
    );
}

export default Card;