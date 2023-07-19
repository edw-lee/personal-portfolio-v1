import { ContentDataType } from "@/types/content-type";
import SectionHeader from "./section-header";
import FixedLinks from "./fixed-links";
import Links from "./links";

export default function HeroSection({ className, supportingTextData }:
    { className?: string, supportingTextData: ContentDataType }) {
    return (
        <section className={`flex flex-col justify-center h-screen ${className}`}>
            <div className="lg:mr-5 mb-24">
                <div className="flex items-end flex-wrap gap-5 mb-10">
                    <div className="text-primary text-xl lg:text-3xl whitespace-nowrap">Hi, I'm </div>
                    <div className='text-secondary font-black text-6xl lg:text-7xl whitespace-nowrap'>Edwin Lee.</div>
                </div>
                <div className="text-tertiary max-w-4xl">
                    <div className="mb-12 text-3xl" dangerouslySetInnerHTML={{ __html: supportingTextData.contentHtml }}></div>
                </div>

                <Links className="lg:hidden" />
            </div>
        </section>
    );
}

