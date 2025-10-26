interface CertificateCardProps {
    key: string;
    image: string;
}

export const CertificateCard = ({
    key,
    image,
}: CertificateCardProps) => (
    <div 
        key={key}
        className="flex-1/2 md:flex-1/4"
        >
        <a href={image} target="_blank">
            <img 
                title={"Accreditation Certificate"}
                className="w-full h-auto cursor-pointer hover:brightness-110 hover:scale-110 transition duration-300"
                src={image}
            />
        </a>
    </div>
)