<script>
import AddProject from "../components/AddProject.vue"
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import { useProjStore } from "@/stores/projStore"

export default {
  components: { Header, Footer, AddProject },
  data() {
    return {
        projStore: useProjStore()
    }
  }
}
</script>

<template>
    <div>
        <Header />
        <div class="container">
            <AddProject :projStore="projStore"/>
        </div>
        <Footer />
    </div>
</template>