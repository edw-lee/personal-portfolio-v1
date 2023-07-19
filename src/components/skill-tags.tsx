import TagPill from "./tag-pill";

export default function SkillTags({ skills }: { skills: string[] }) {
    return (
        <div className="flex flex-wrap gap-2">
            {
                skills.map((skill, idx) => <TagPill key={idx}>{skill}</TagPill>)
            }
        </div>
    );
}