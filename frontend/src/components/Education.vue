<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="pendidikan" class="py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100 text-gray-900 relative overflow-hidden">
    <!-- Glow Background -->
    <div class="absolute -top-32 left-1/2 w-[80vw] h-[80vw] bg-cyan-300 opacity-20 blur-[100px] rounded-full -z-10"></div>

    <div class="container mx-auto px-6 relative z-10">
      <SectionTitle title="Riwayat Pendidikan" />

      <div class="relative max-w-4xl mx-auto">
        <!-- Vertical Line -->
        <div class="absolute h-full border-l-2 border-cyan-300/40 left-1/2 transform -translate-x-1/2 z-0"></div>

        <div v-for="(edu, index) in educationHistory" :key="edu.id"
          class="mb-16 flex flex-col md:flex-row items-center w-full relative z-10 group">

          <!-- Left -->
          <template v-if="index % 2 === 0">
            <div class="md:w-1/2 pr-8 md:text-right flex flex-col items-end">
              <div
                class="bg-white shadow-lg border border-blue-200 text-left rounded-xl p-6 w-full max-w-md hover:scale-[1.03] transition-transform duration-300 hover:shadow-cyan-300/40">
                <p class="text-sm text-blue-600 font-semibold mb-1">{{ edu.period }}</p>
                <h3 class="text-xl font-bold text-blue-900 mb-1">{{ edu.institution }}</h3>
                <p class="text-blue-700 text-sm">{{ edu.major }}</p>
              </div>
            </div>

            <!-- Timeline Node -->
            <div class="flex items-center justify-center w-full md:w-auto my-6 md:my-0">
              <div
                class="w-6 h-6 bg-gradient-to-tr from-blue-400 to-cyan-500 rounded-full border-4 border-white shadow-[0_0_15px_3px_rgba(34,211,238,0.3)] animate-pulse">
              </div>
            </div>

            <div class="md:w-1/2"></div>
          </template>

          <!-- Right -->
          <template v-else>
            <div class="md:w-1/2"></div>

            <!-- Timeline Node -->
            <div class="flex items-center justify-center w-full md:w-auto my-6 md:my-0">
              <div
                class="w-6 h-6 bg-gradient-to-tr from-blue-400 to-cyan-500 rounded-full border-4 border-white shadow-[0_0_15px_3px_rgba(34,211,238,0.3)] animate-pulse">
              </div>
            </div>

            <div class="md:w-1/2 pl-8 md:text-left flex flex-col items-start">
              <div
                class="bg-white shadow-lg border border-blue-200 text-left rounded-xl p-6 w-full max-w-md hover:scale-[1.03] transition-transform duration-300 hover:shadow-blue-300/40">
                <p class="text-sm text-blue-600 font-semibold mb-1">{{ edu.period }}</p>
                <h3 class="text-xl font-bold text-blue-900 mb-1">{{ edu.institution }}</h3>
                <p class="text-blue-700 text-sm">{{ edu.major }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
