import { defineStore } from "pinia";

export const useProjStore = defineStore("projStore", {
    state: () => ({
        projects: [  ],
    }),
    actions: {
        addProject(name, desc, photo) {
            const newProj = {
                id: this.projects.length,
                name: name,
                desc: desc,
                photo: photo,
                isChecked: false
            };
            this.projects.push(newProj);
        },
        deleteProjects() {
            this.projects = this.projects.filter((el) => el.isChecked == false);
            for(var i in this.projects) {
                this.projects[i].id = i;
            }
        },
        editProject(id, photo, f) {
            if (this.projects[id].photo != photo) {
                this.projects[id].photo = photo;
            }else if (f) {this.projects[id].photo = '';};
        }
    }
});