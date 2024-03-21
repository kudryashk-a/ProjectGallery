<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="p-3 border">
        <div class="row">
            <div class="col-sm-7">
                <router-link :to="`/form/${ project.id }`" class="text-decoration-none">
                    <h3>{{ project.name }}</h3>
                </router-link>
                <p>{{ project.desc }}</p>
                <input type="checkbox"  v-model="project.isChecked"> удалить
            </div>
            <div class="col-sm-2">
                <div v-if="project.photo != null">
                    <img :src=project.photo width="150">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h3 {
    color: rgb(69,197,255);
}
</style>
