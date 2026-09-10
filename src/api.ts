import axios from "axios";
import { FetchProjectsResult } from "./types/types";

const baseUrlForProjects = "projects/projects.json";
const baseUrlForExperience = "experience/experience.json";
const httpClient = axios.create();

export const fetchData = async(): Promise<FetchProjectsResult> => {
    const requests = [httpClient.get(baseUrlForProjects), httpClient.get(baseUrlForExperience)];
    // const response = await httpClient.get(baseUrlForProjects);
    const res = await Promise.all(requests);
    if(res.length){
        // const hasFailedResponse = res.some((response) => !response.data.success);
        // if (!hasFailedResponse) {
            return { isSuccess: true, response: {
                projects: res[0].data.projects ,
                experiences: res[1].data.experience ,
            } }
        // }
    }
        return { isSuccess: false, response: null }
} 

//we can also write class for this api-helper