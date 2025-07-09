<template>
  <header
    class="bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-blue-100 animate-fade-in"
  >
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div
        class="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 bg-clip-text text-transparent drop-shadow-sm tracking-tight"
      >
        Fahrudiyansah Warwefubun
      </div>

      <!-- Hamburger Button -->
      <button
        @click="open = !open"
        class="md:hidden text-gray-700 hover:text-blue-600 transition duration-300 focus:outline-none"
      >
        <svg
          v-if="!open"
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="w-7 h-7 transition-transform duration-300 rotate-180"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Nav Menu -->
      <ul
        :class="[
          'flex flex-col md:flex-row md:items-center fixed md:static top-20 left-0 w-full md:w-auto bg-white/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-0 shadow-md md:shadow-none rounded-xl md:rounded-none p-6 md:p-0 space-y-4 md:space-y-0 md:space-x-8 transition-all duration-300 z-40',
          open ? 'flex' : 'hidden md:flex'
        ]"
      >
        <li>
          <a
            href="#profil"
            class="relative text-gray-700 font-medium px-2 py-1 transition-all duration-300 hover:text-blue-600
                   before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-gradient-to-r before:from-blue-500 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full"
          >
            Profil
          </a>
        </li>
        <li>
          <a
            href="#pendidikan"
            class="relative text-gray-700 font-medium px-2 py-1 transition-all duration-300 hover:text-blue-600
                   before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-gradient-to-r before:from-blue-500 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full"
          >
            Pendidikan
          </a>
        </li>
        <li>
          <a
            href="#skill"
            class="relative text-gray-700 font-medium px-2 py-1 transition-all duration-300 hover:text-blue-600
                   before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-gradient-to-r before:from-blue-500 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full"
          >
            Skill
          </a>
        </li>
        <li>
          <a
            href="#proyek"
            class="relative text-gray-700 font-medium px-2 py-1 transition-all duration-300 hover:text-blue-600
                   before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-gradient-to-r before:from-blue-500 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full"
          >
            Proyek
          </a>
        </li>
        <li>
          <a
            href="#kontak"
            class="relative text-gray-700 font-medium px-2 py-1 transition-all duration-300 hover:text-blue-600
                   before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-gradient-to-r before:from-blue-500 before:to-cyan-400 before:transition-all before:duration-300 hover:before:w-full"
          >
            Kontak
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const open = ref(false);
</script>
