<script>
import Project from './Project.vue'

export default {
    components: { Project },
    props: ['projStore'],
}
</script>

<template>
    <div class="row g-2">
        <div v-if="projStore.projects.length == 0" class="p-3 border">
            Нет проектов
        </div>
        <Project v-for="project of projStore.projects" :project="project"/>
    </div>
</template>
