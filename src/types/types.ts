//gives all the keys that are not a function
export type TypeKeys<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]

export type Project = {
    title:string,
    description:string,
    image:string[],
    skills:string[]
}
export type ExperienceType = {
    mainTech?: string,
    technologies:string[],
    title:string,
    years:string,
    company:string
}
export interface FetchProjectsResult {
  isSuccess: boolean;
  response: {
    projects: Project[];
    experiences: ExperienceType[];
  } | null;
}
export type ProjectStore = {
    projects: Project[],
    loading: boolean;
    error: string | null;   
    showModal: boolean,
    experience: ExperienceType[],
    fetchProjects: () => Promise<FetchProjectsResult>;
    showProjectModal: (showModal:boolean) => void;
}

