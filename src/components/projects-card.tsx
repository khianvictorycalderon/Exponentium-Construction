interface ProjectCardProps {
    key: string;
    title: string;
    description: string;
    year: number;
    bgImage: string;

}

export const ProjectCard = ({
    key,
    title,
    description,
    year,
    bgImage
}: ProjectCardProps) => (
    <div 
        key={key}
        className="flex-[100%] md:flex-1/2 h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center flex flex-col justify-end"
        style={{
            backgroundImage: `url(${bgImage})`
        }}
        >
        <div className="bg-black/50 text-white py-2 md:py-4 lg:py-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl italic font-semibold">{title}</h2>
            <h3 className="pt-2 md:pt-4 font-semibold italic text-xl">{description}</h3>
            <h3 className="font-semibold italic text-xl">({year})</h3>
        </div>
    </div>
);