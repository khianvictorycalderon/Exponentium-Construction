import { BaseText, HeadingText } from "./typography";

interface ServiceCardProps {
    key: string | number;
    className?: string;
    title: string;
    description: string;
    image: string;
}

export const ServiceCard = ({
    key,
    className,
    title,
    description,
    image
}: ServiceCardProps) => (
    <div
        key={key}
        className={`${className} w-[45%] lg:w-[32%] border-2 rounded-md shadow-[4px_4px_4px_rgba(0,0,0,0.1)] border-gray-300 md:px-6`}
    >
        <div className="flex flex-col lg:py-8 py-4">
            <div className="flex-2/3">
                <div className="w-full aspect-[5/3] overflow-hidden mb-2 mx-auto">
                    <img className="w-full h-full object-contain" src={image} />
                </div>
            </div>
            <div className="flex-1/3">
                <HeadingText className="lg:!text-3xl text-orange-600">{title}</HeadingText>
                <BaseText className="mt-4 font-semibold text-gray-700">{description}</BaseText>
            </div>
        </div>
        
    </div>
);