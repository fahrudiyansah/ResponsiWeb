<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="proyek" class="py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100 text-gray-900">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white rounded-2xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col"
        >
          <!-- Gambar -->
          <div class="overflow-hidden">
            <img
              :src="project.image"
              alt="Gambar Proyek"
              class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <!-- Konten -->
          <div class="p-6 flex flex-col flex-1">
            <h3
              class="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-blue-700"
            >
              {{ project.title }}
            </h3>

            <p class="text-gray-600 mb-4 flex-1">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="mb-4 flex flex-wrap gap-2">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
              >
                {{ t }}
              </span>
            </div>

            <!-- Link -->
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-auto inline-flex items-center text-blue-600 font-semibold hover:underline group/link"
            >
              Lihat Detail
              <svg
                class="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-1"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
