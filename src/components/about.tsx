import { ContentDataType } from "@/types/content-type";
import SectionHeader from "./section-header";

export default function About({ className, aboutData }: { className?: string, aboutData: ContentDataType }) {
    return (
        <div className={`basis-1/2 text-tertiary max-w-4xl ${className}`}>
            <SectionHeader id="about">About</SectionHeader>
            <div dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }}></div>
        </div>
    );
}