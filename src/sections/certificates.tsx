import { CertificateCard } from "../components/certificate-card";
import SectionContainer from "../components/section-container"

export const CertificatesSection = () => {

    const Certificates = [
        {
            image: "images/certificates/iso.png"
        },
        {
            image: "images/certificates/dole.png"
        },
        {
            image: "images/certificates/ciap.png"
        },
        {
            image: "images/certificates/philgeps.png"
        },
    ]

    return (
        <section className="pt-8 md:pt-16 lg:pt-24">
            <SectionContainer className="text-center">
                <>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-orange-500 font-bold">Certification & Accreditation</h2>
                    <h3 className="text-base md:text-lg lg:text-xl italic text-gray-700 font-semibold">We meet the highest industry standards and maintain full compliance with regulatory bodies.</h3>

                    <div className="flex flex-wrap pt-8 md:pt-16 lg:pt-24">
                        {Certificates.map((item, index) => (
                            <CertificateCard
                                key={`${item.image}-${index}`}
                                image={item.image}
                            />
                        ))}
                    </div>

                </>
            </SectionContainer>
        </section>
    );
}