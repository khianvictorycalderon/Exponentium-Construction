import { ProjectCard } from "../components/projects-card";
import SectionContainer from "../components/section-container";
import { SubHeadingText } from "../components/typography";

export const ProjectSection = () => {
    
    const Projects = [
        {
            title: "Skyline Tower",
            description: "Commercial High-Rise",
            year: 2023,
            bgImage: "images/projects/skyline-tower.png"
        },
        {
            title: "Rivera Bridge",
            description: "Public Infrastructure",
            year: 2022,
            bgImage: "images/projects/rivera-bridge.png"
        },
        {
            title: "Solaris Tech Park",
            description: "Industrial Complex",
            year: 2021,
            bgImage: "images/projects/solaris-tech-park.png"
        },
        {
            title: "New City Hall Expansion",
            description: "Government Project",
            year: 2020,
            bgImage: "images/projects/new-city-hall-expansion.png"
        },
    ]

    return (
        <section className="py-4 md:py-8 lg:py-16">
            <SectionContainer>
                <>
                    <h2 className="text-orange-500 font-bold lg:text-5xl md:text-4xl text-3xl text-center">Featured Projects</h2>
                    <SubHeadingText className="text-center italic text-gray-700">
                        Here's a glimpse of how we turn our client's dream into reality.
                    </SubHeadingText>
                </>
            </SectionContainer>
            <div className="flex flex-wrap pt-16">
                {Projects.map((item, index) => (
                    <ProjectCard
                        key={`${item.title}-${index}`}
                        title={item.title}
                        description={item.description}
                        year={item.year}
                        bgImage={item.bgImage}
                    />
                ))}
            </div>
        </section>
    ); 

}