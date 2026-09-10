import {create} from "zustand"
import { ProjectStore , TypeKeys} from "../types/types"
import { fetchData } from "../api"

const initialState:Pick<ProjectStore, TypeKeys<ProjectStore>> = {
    loading: false,
    error: null,
    projects: [],
    showModal: false,
    experience: []
}
export const useProjectStore = create<ProjectStore>((set) => ({
    ...initialState,
    fetchProjects: async () => {
        set({ loading: true, error: null });
        try {
            const result = await fetchData(); // API call
            if (result.isSuccess && result.response) {
            set({
                projects: result.response.projects,
                experience: result.response.experiences,
                loading: false,
            });
            } else {
            set({ error: "Failed to fetch projects", loading: false });
            }
            return result;
        } catch (err) {
            set({ error: "Something went wrong", loading: false });
            return { isSuccess: false, response: null };
        }
    },
    showProjectModal: (showModal) => {
        set({showModal: showModal});
    }
}))
