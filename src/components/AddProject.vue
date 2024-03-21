<script>
    import PictureInput from 'vue-picture-input';
    export default {
        data () {
            return {
                error: '',
                projName: '',
                projDesc: '',
                projPhoto: '',
                id: this.$route.params.id,
                isChecked: false
            }
        },
        components: {PictureInput},
        props: ['projStore'],
        methods: {
            sendProj() {
                this.projPhoto = this.$refs.pictureInput.image
                if (this.id == '') {
                    if (this.projName == '') {
                        this.error = 'название проекта не введено';
                    } else {
                        this.projStore.addProject(
                            this.projName, 
                            this.projDesc, 
                            this.projPhoto);
                        this.error = '';
                        this.projName = '';
                        this.projDesc = '';
                        this.projPhoto = '';
                    }
                } else if (this.id < this.projStore.projects.length) {
                    if (this.projStore.projects[this.id].name == '') {
                        this.error = 'название проекта не введено';
                    } else {
                        this.projStore.editProject(
                            this.id, 
                            this.projPhoto,
                            this.isChecked);
                        this.error = '';
                        this.projPhoto = '';
                        this.isChecked = false;
                    }
                }
            }
        }
    }
</script>

<template>
    <div class="row">
        <div class="col-sm-9">
            <h2 v-if="id == ''" class="text-center">Создание проекта</h2>
            <h2 v-else class="text-center">Редактирование проекта</h2>
        </div>
        <div class="col-sm-3 text-center">
              <div class="row g-2">
                <router-link to="/" class="btn btn1">Список проектов</router-link>
              </div>
        </div>
        <form @submit.prevent="sendProj">
                <div class="row">
                    <div class="col-sm-9">
                        <p v-if="id != ''">
                            <input class="form-control" type="text" v-model="projStore.projects[id].name" placeholder="Название">
                            <textarea class="form-control" type="text" v-model="projStore.projects[id].desc" placeholder="Описание"></textarea>
                        </p>
                        <p v-else>
                            <input class="form-control" type="text" v-model="projName" placeholder="Название">
                            <textarea class="form-control" type="text" v-model="projDesc" placeholder="Описание"></textarea>
                        </p>
                        <p class="text-danger">{{ error }}</p>
                        <div v-if="id != ''">
                            <div v-if="projStore.projects[id].photo != ''" class="row">
                                <div class="col-sm-3"><p>Фото проекта:</p></div>
                                <div class="col-sm-4"><img :src=projStore.projects[id].photo width="150"></div>
                                <div class="col-sm-2"><input type="checkbox" v-model="isChecked"> удалить фото</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 text-center">
                        <picture-input 
                        ref="pictureInput"
                        width="150" 
                        height="150" 
                        accept="image/*" 
                        :crop="false"
                        :removable="true"
                        :hideChangeButton="true"
                        removeButtonClass="btn"
                        :customStrings="{
                        drag: 'Add photo'}">
                        </picture-input>
                        <div class="row g-2">
                            <button type="submit" class="btn btn2">Сохранить</button>
                        </div>
                    </div>
                </div>
        </form>
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