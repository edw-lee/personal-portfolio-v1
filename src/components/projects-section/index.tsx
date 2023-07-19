import { ProjectDataType } from "@/types/content-type";
import SectionHeader from "../section-header";
import Project from "./project";

export default function ProjectsSection({ projectsData }: { projectsData: ProjectDataType[] }) {    
    return (
        <section>
            <SectionHeader id="projects">Projects</SectionHeader>

            <div className="flex flex-col items-center">
                {projectsData.map((projectData, idx) => <Project key={idx} projectData={projectData} />)}
            </div>
        </section>
    );
}