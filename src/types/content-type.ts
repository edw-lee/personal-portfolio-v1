export type ContentDataType = {
    contentHtml: string;
}

export type ExperienceDataType = {
    title: string;
    company: string;
    skills: string[];
    startDate: string;
    endDate: string;
    isCurrent?: boolean;
    content: string;
}

export type ProjectDataType = {
    title: string;
    skills: string[];
    content: string;
    imageUrl: string;
}