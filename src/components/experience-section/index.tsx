import { ExperienceDataType } from "@/types/content-type";
import SectionHeader from "../section-header";
import Timeline from "./timeline";
import Link from "next/link";

export default function ExperienceSection({ className, experienceData }:
    { className?: string, experienceData: ExperienceDataType[] }) {
    return (
        <section className={className}>
            <SectionHeader id="experience">Experience</SectionHeader>

            <div className="flex flex-col items-center">
                <Timeline className="mb-20" experienceData={experienceData} />

                <Link className="flex items-center gap-3 font-bold text-tertiary hover:underline hover:text-secondary transition-colors"
                    href="/EdwinLee_Resume.pdf" target="_blank">
                    <span className="border w-[25px] h-0"></span>
                    View my resume
                    <span className="border w-[25px] h-0"></span>
                </Link>
            </div>
        </section>
    )
}