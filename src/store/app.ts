import {defineStore} from "pinia";
import { Application } from "@/models"



export const useAppStore = defineStore('app', {
    state: () => ({
        app:{} as Application
    }),
    getters: {

    },
    actions: {
        setApp(app: Application) {
            this.app = app
        },

    },
})
