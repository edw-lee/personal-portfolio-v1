import NavBar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { getData, getSortedExperienceData, getSortedProjectsData } from "@/lib/contents"
import { ContentDataType, ExperienceDataType, ProjectDataType } from "@/types/content-type"
import { getPromiseSettledResultValue } from "@/util/promise"
import { inter } from "@/util/fonts"
import "@/app/globals.css"
import type { Metadata } from 'next'
import Footer from "@/components/footer"
import { createContext, useState } from "react"
import FixedLinks from "@/components/fixed-links"
import About from "@/components/about"
import Links from "@/components/links"
import HamburgerMenu from "@/components/hamburger-menu"

config.autoAddCss = false;
export const RouteContext = createContext({
  currRoute: "",
  setCurrRoute: (route: string) => { }
});

export default function Home({ aboutData, supportingTextData, experienceData, projectsData }:
  { aboutData: ContentDataType, supportingTextData: ContentDataType, experienceData: ExperienceDataType[], projectsData: ProjectDataType[] }) {
  const [currRoute, setCurrRoute] = useState("about");

  return (
    <RouteContext.Provider value={{ currRoute, setCurrRoute }}>
      <main className={`${inter.variable} font-sans min-h-screen bg-surface relative z-10`}>
        {/* <div className="header-deco"></div> */}

        <div className="bg-deco"></div>

        <NavBar />
        <HamburgerMenu/>

        <div className="lg:container pb-10 px-10 md:px-14 lg:px-20">
          <HeroSection supportingTextData={supportingTextData} />          

          <div className="flex flex-col gap-48 mb-64">
            <About className="mx-auto" aboutData={aboutData} />

            <ExperienceSection experienceData={experienceData} />

            <ProjectsSection projectsData={projectsData} />
          </div>

          <Links className="lg:hidden justify-center" showDeco={true} />
        </div>

        <FixedLinks className="hidden lg:flex" />

        {/* <Footer /> */}
      </main>
    </RouteContext.Provider>
  )
}

export async function getStaticProps() {
  const promiseResults = await Promise.allSettled([
    getData("about.md"),
    getData("supporting-text.md"),
    getSortedExperienceData(),
    getSortedProjectsData()
  ]);

  const aboutData = getPromiseSettledResultValue(promiseResults[0]);
  const supportingTextData = getPromiseSettledResultValue(promiseResults[1]);
  const experienceData = getPromiseSettledResultValue(promiseResults[2]);
  const projectsData = getPromiseSettledResultValue(promiseResults[3]);

  return {
    props: {
      aboutData,
      supportingTextData,
      experienceData,
      projectsData
    }
  }
}
