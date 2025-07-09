<script setup>
defineProps({ title: String });
</script>

<template>
  <div class="mb-16 text-center relative">
    <!-- Judul -->
    <h2
      class="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent tracking-tight drop-shadow-sm"
    >
      {{ title }}
    </h2>

    <!-- Underline Glow -->
    <div class="relative w-36 h-1.5 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg overflow-hidden">
      <!-- Animasi Cahaya -->
      <div class="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full blur-md opacity-60"></div>
    </div>
  </div>
</template>
