import { createRouter, createWebHistory } from 'vue-router'
import Projects from './views/Projects.vue'
import Form from './views/Form.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'projects',
            component: Projects,
            props: true
        },
        {
            path: '/form/:id?',
            name: 'form',
            component: Form,
            props: true
        }
    ]
})

export default router