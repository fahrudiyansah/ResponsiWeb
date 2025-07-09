<script setup>
import SectionTitle from './SectionTitle.vue';
</script>

<template>
  <footer id="kontak" class="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
    <!-- Futuristic Glow Background -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-[60vw] h-[60vw] bg-blue-700 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

    <div class="relative z-10 container mx-auto px-6 text-center font-mono">
      <SectionTitle title="Hubungi Saya" />

      <p class="text-xl text-blue-200 mb-10 animate-pulse">Jangan ragu untuk terhubung atau bertanya.</p>

      <a
        href="mailto:emailanda@example.com"
        class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-semibold py-3 px-10 rounded-2xl shadow-xl hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300 tracking-wide uppercase"
      >
        ✉️ Kirim Email
      </a>

      <!-- Social Icons -->
      <div class="flex justify-center space-x-6 mt-12 mb-10">
        <a
          href="#"
          target="_blank"
          class="text-white hover:text-cyan-400 text-2xl p-3 rounded-full border border-blue-400 hover:border-cyan-400 transition duration-300 hover:ring-2 hover:ring-cyan-500/60"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="#"
          target="_blank"
          class="text-white hover:text-blue-300 text-2xl p-3 rounded-full border border-blue-400 hover:border-blue-300 transition duration-300 hover:ring-2 hover:ring-blue-400/60"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>

      <p class="text-blue-300 text-sm tracking-wider">
        &copy; {{ new Date().getFullYear() }} Fahrudiyansah.
        <br />
        Dibuat dengan <span class="text-white font-semibold">Vue & TailwindCSS</span>
      </p>
    </div>
  </footer>
</template>
