import React from "react";

function GenericSection({title, id, children}: { title: string; id: string; children: React.ReactNode }) {
    return (
        <section className="py-12 min-h-svh md:min-h-auto w-full max-w-11/12 sm:max-w-10/12 px-4 pt-32" id={id}>
            <h2 className="text-5xl text-center font-bold mb-8">{title}</h2>
            <div className="space-y-4">{children}</div>
        </section>
    );
}

export default GenericSection;