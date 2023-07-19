import { ProjectDataType } from "@/types/content-type";
import SkillTags from "../skill-tags";

export default function Project({ projectData }: { projectData: ProjectDataType }) {
    return (
        <div className="group cursor-pointer flex flex-col lg:flex-row gap-10 items-center border border-transparent transition-colors duration-300 rounded-2xl p-4 md:p-8 hover:border-white/20 hover:bg-white/20">
            <img className="rounded-xl w-full max-w-[500px] lg:w-[300px] object-fill" src={projectData.imageUrl} />

            <div className="flex flex-col gap-5 justify-center text-tertiary group-hover:text-secondary">
                <div className="font-bold">{projectData.title}</div>

                <div>
                    {projectData.content}
                </div>

                <SkillTags skills={projectData.skills} />
            </div>
        </div>
    );
}