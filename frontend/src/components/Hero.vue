<template>
  <section
    id="profil"
    class="relative bg-gradient-to-tr from-white via-sky-50 to-blue-100 text-gray-900 py-24 px-6 overflow-hidden font-sans"
  >
    <!-- Background Glow Decorative -->
    <div class="absolute top-[-100px] left-1/2 w-[500px] h-[500px] bg-cyan-200 opacity-30 rounded-full blur-[120px] -z-10"></div>

    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
      <!-- LEFT -->
      <div class="animate-slide-in-left flex flex-col items-start">
        <h1 class="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900 tracking-tight">
          Halo, Saya
          <span
            class="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          >
            Fahrudiyansah
          </span>
        </h1>

        <p class="text-lg md:text-xl text-slate-700 mt-4 mb-10 max-w-xl leading-relaxed">
          Mahasiswa Teknik Informatika yang antusias terhadap teknologi futuristik,
          pengembangan web modern, serta antarmuka pengguna berbasis pengalaman.
        </p>

        <!-- Button -->
        <a
          href="#kontak"
          class="relative group inline-block px-8 py-3 text-white font-bold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          <span
            class="absolute inset-0 bg-white opacity-10 blur-xl transition duration-500 group-hover:opacity-20"
          ></span>
          <span class="relative z-10 flex items-center gap-2">
            <svg class="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 12.79A9 9 0 1111.21 3H21v9.79z" />
            </svg>
            Hubungi Saya
          </span>
        </a>
      </div>

      <!-- RIGHT -->
      <div class="animate-slide-in-right flex justify-center items-center">
        <div class="relative group">
          <!-- Profil -->
          <img
            src="/profil/pp.jpeg"
            alt="Foto Profil"
            class="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white ring-4 ring-blue-300 transition-transform duration-300 group-hover:scale-105"
          />

          <!-- Decorative ring -->
          <div
            class="absolute inset-0 rounded-full border-4 border-dashed border-blue-200 animate-spin-slow"
          ></div>

          <!-- Badge -->
          <span
            class="absolute -bottom-4 -right-4 backdrop-blur-md bg-white/30 border border-blue-200 text-blue-800 px-5 py-2 rounded-full text-sm font-semibold shadow-lg"
          >
            Informatics
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
