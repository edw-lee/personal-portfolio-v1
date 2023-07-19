import { useEffect, useRef, useState } from "react";
import TagPill from "../tag-pill";
import SkillTags from "../skill-tags";
import { ExperienceDataType } from "@/types/content-type";

export default function TimelineSection(
    { experienceData: experienceData, isLast }:
        { experienceData: ExperienceDataType, isLast?: boolean }
) {
    const MMyyyyDateFormat: Intl.DateTimeFormatOptions = { month: "short", year: "numeric" }
    const MMDateFormat: Intl.DateTimeFormatOptions = { month: "short" }
    const ref = useRef<HTMLDivElement>(null);
    const [clientHeight, setClientHeight] = useState(0);

    const startDate = new Date(experienceData.startDate);
    const endDate = new Date(experienceData.endDate);

    const isSameYear = startDate.getFullYear() == endDate.getFullYear();

    useEffect(() => {
        setClientHeight(ref.current?.clientHeight ?? 0);
        
        window.addEventListener("resize", () => {
            setClientHeight(ref.current?.clientHeight ?? 0);
        });
    }, []);

    return (
        <div ref={ref} className="group lg:max-w-6xl relative grid grid-cols-1 lg:grid-cols-6 cursor-pointer p-4 sm:p-8">
            <div className="text-tertiary lg:text-right group-hover:text-white col-span-1 mb-3">
                {startDate.toLocaleDateString("en-GB", isSameYear ? MMDateFormat : MMyyyyDateFormat)} - {!experienceData.isCurrent ? new Date(experienceData.endDate)!.toLocaleDateString("en-GB", MMyyyyDateFormat) : 'Present'}
            </div>
            <div className="hidden lg:flex col-span-1 flex-col items-center py-3 relative">
                {!isLast && <span className="block bg-tertiary w-1 my-2 absolute" style={{ height: `${clientHeight}px` }}></span>}
                <div className="flex justify-center items-center relative">
                    <span className="rounded-full block bg-tertiary w-5 h-5 absolute group-hover:bg-white"></span>
                    <span className="rounded-full block bg-tertiary w-3 h-3 group-hover:bg-primary absolute"></span>
                </div>
            </div>

            <div className="h-full w-full border border-transparent rounded-2xl group-hover:border-white/20 group-hover:bg-white/20 transition-colors duration-300 absolute"></div>

            <div className="text-tertiary col-span-4 relative group-hover:text-white">
                <div className="font-bold mb-1">{experienceData.title} @ {experienceData.company}</div>
                <div className="mb-5">{experienceData.content}</div>

                <SkillTags skills={experienceData.skills} />
            </div>
        </div>
    );
}