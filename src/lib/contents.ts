import path from "path"
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentsDirectory = path.join(process.cwd(), 'contents');
const experienceDirectory = path.join(contentsDirectory, 'experience');
const projectsDirectory = path.join(contentsDirectory, 'projects');

export async function getData(fileName: string) {
    const fullPath = path.join(contentsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        contentHtml
    };
}

export async function getSortedExperienceData() {    
    const fileNames = fs.readdirSync(experienceDirectory);
    const allExperienceData = fileNames.map<any>((fileName) => {
        const fullPath = path.join(experienceDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContents);        
        
        return {          
            content: matterResult.content,              
            ...matterResult.data,        
        };
    });

    return allExperienceData.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
}

export async function getSortedProjectsData() {    
    const fileNames = fs.readdirSync(projectsDirectory);

    const allProjectsData = fileNames.map<any>((fileName) => {
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContents);    

        return {          
            content: matterResult.content,              
            ...matterResult.data,        
        };
    });    

    return allProjectsData.sort((a, b) => a.sort - b.sort);
}