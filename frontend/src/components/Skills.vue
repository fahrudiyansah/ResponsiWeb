<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skills = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills')
    skills.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section id="skill" class="py-24 bg-gradient-to-br from-white to-blue-100 text-gray-900 relative overflow-hidden">
    <!-- Glow Background -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-300 opacity-20 blur-[120px] rounded-full -z-10"></div>

    <div class="container mx-auto px-6 relative z-10">
      <SectionTitle title="Keahlian & Teknologi" />

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-12">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="group bg-white border border-blue-100 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:border-blue-300"
        >
          <!-- Icon with Image -->
          <div
            class="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-100 to-blue-300 shadow-inner mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-110"
          >
            <img
              v-if="skill.image"
              :src="skill.image"
              :alt="skill.name + ' icon'"
              class="w-8 h-8 object-contain"
            />
            <span v-else class="text-2xl text-blue-600">
              <i :class="skill.icon || 'fas fa-code'"></i>
            </span>
          </div>

          <!-- Title & Level -->
          <h3 class="text-lg font-bold text-gray-800 mb-1">{{ skill.name }}</h3>
          <p class="text-gray-500 text-sm">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
