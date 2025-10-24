import SectionContainer from "../component/section-container";
import { SubHeadingText } from "../component/typography";

export const ProjectSection = () => (
    <section className="py-4 md:py-8 lg:py-16">
        <SectionContainer>
            <>
                <h2 className="text-orange-500 font-bold lg:text-5xl md:text-4xl text-3xl text-center">Featured Projects</h2>
                <SubHeadingText className="text-center italic text-gray-700">
                    Here's a glimpse of how we turn our client's dream into reality.
                </SubHeadingText>
            </>
        </SectionContainer>
    </section>
); 