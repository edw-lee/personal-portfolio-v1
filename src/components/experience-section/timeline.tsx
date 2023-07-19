import { ExperienceDataType } from "@/types/content-type";
import TagPill from "../tag-pill";
import TimelineSection from "./timeline-section";
import classNames from "classnames";

export default function Timeline({ className, experienceData }: { className?: string, experienceData: ExperienceDataType[] }) {
    return (
        <div className={classNames(className, "flex flex-col gap-5")}>
            {experienceData.map((experience, idx) => <TimelineSection
                key={idx}
                experienceData={experience}
                isLast={idx == experienceData.length - 1} />)}
        </div>
    );
}