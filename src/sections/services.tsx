import SectionContainer from "../component/section-container"
import { ServiceCard } from "../component/services-card";
import { HeadingText } from "../component/typography"

export const ServicesSection = () => {
    
    const Services = [
        {
            title: "Commercial Construction",
            description: "Modern spaces built to inspire and perform.",
            image: "images/service/commercial.png"
        },
        {
            title: "Public Infrastructure",
            description: "Bridges, road, and government facilities built for long-term impact.",
            image: "images/service/public.png"
        },
        {
            title: "Design & Build",
            description: "From blueprint to completion, turning visions into reality.",
            image: "images/service/blueprint.png"
        },
    ];
    
    return (
        <SectionContainer className="py-16 md:py-16 lg:py-32 text-center">
            <>
                <HeadingText className="!text-3xl md:!text-4xl lg:!text-5xl text-orange-500">What We Build</HeadingText>

                {/* Services From */}
                <div className="flex flex-wrap justify-center gap-2 pt-8 md:py-16">
                    {Services.map((item, index) => (
                        <ServiceCard
                            key={`${item.title}-${index}`}
                            className={index === 2 ? "col-span-2 lg:col-span-1" : "col-span-1"}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
            </>
        </SectionContainer>
    )
}