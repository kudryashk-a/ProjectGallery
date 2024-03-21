<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import ProjectList from "../components/ProjectList.vue"
import { useProjStore } from "../stores/projStore"

export default {
  components: { Header, Footer, ProjectList },
  data() {
    return {
      projStore: useProjStore(),
      isDelete: false,
      isConfirm: false
    }
  },
  methods: {
    onDelete() {
      this.isDelete = true;
    },
    deleteProj() {
      if (this.isConfirm == true) {
        this.projStore.deleteProjects();
      }
      this.isDelete = false;
    }
  }
}
</script> 

<template>
    <div>
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-sm-9">
              <h2 class="text-center">Список проектов</h2>
              <ProjectList :projStore="projStore"/>
            </div>
            <div class="col-sm-3 text-center">
              <div class="row g-2">
                <router-link to="/form" class="btn btn1">Создать проект</router-link>
              </div>
              <div class="row">
                <ul v-for="project of projStore.projects" :project="project">
                  <li v-if="project.isChecked == true">
                    {{ project.name }}
                  </li>
                </ul>
              </div>
              <div class="row g-2">
                <button class="btn btn2" @click="onDelete" >Удалить</button>
              </div>
              <div v-if="isDelete == true" class="row g-2">
                <div class="p-2 border">
                  <p><input type="checkbox" v-on:change="isConfirm = !isConfirm">
                    Подтвердите, что хотите удалить все выбранные проекты
                  </p>
                  <button class="btn btn3" @click="deleteProj">ОК</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped>
h2 {
  color: rgb(162, 146, 186);
}
.btn1 {
  background-color: rgb(255,130,97);
  margin-top: 1cap;
  color:rgb(255, 255, 255);
}
.btn2 {
  background-color:rgb(255,95,117);
  margin-top: 2cap;
  color:rgb(255, 255, 255);
}
.btn3 {
  background-color: rgb(162, 146, 186);
  color:rgb(255, 255, 255);
}
</style>