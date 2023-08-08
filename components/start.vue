<script setup lang="ts">
const scrollToElement = (where: string) => {
  document.getElementById(where)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="snap-y overflow-y-scroll snap-proximity">
    <div
      id="norm"
      class="snap-center overscroll-y-contain sm:w-screen sm:h-screen flex flex-col pt-8 sm:pt-0 items-center sm:justify-center"
    >
      <div class="flex flex-col items-center justify-center absolute">
        <span
          class="text-gren text-6xl sm:text-8xl font-semibold animate-fadeIn center"
          >Nathan Suh</span
        >
        <v-divider
          transition="slide-x-transition"
          class="invisible md:visible md:animate-elongate md:w-1/3 md:h-1 md:bg-gren md:border-0 md:rounded md:my-10"
        ></v-divider>
        <span
          class="text-gren pt-5 sm:pt-0 text-center text-xl sm:text-4xl animate-fadeIn"
          >Software engineer, researcher, seeking challenges and learning
          opportunities</span
        >
        <div class="flex flex-row">
          <a href="https://www.linkedin.com/in/nathan-suh/"
            ><div
              class="transition duration-200 text-pinky hover:text-pinky-two sm:text-2xl m-7 mt-6 animate-fadeIn"
            >
              LinkedIn
            </div></a
          >
          <a href="https://github.com/nhsuh"
            ><div
              class="transition duration-200 text-pinky hover:text-pinky-two sm:text-2xl m-7 mt-6 animate-fadeIn"
            >
              GitHub
            </div></a
          >
          <a
            href="https://docs.google.com/document/d/1Fl38qC6ozEAN1qs_YyX55h-AopflpHOWbuK4XGsU2lo/edit#heading=h.gjdgxs"
            ><div
              class="sm:text-2xl transition duration-200 text-pinky hover:text-pinky-two m-7 mt-6 animate-fadeIn"
            >
              Resume
            </div></a
          >
        </div>
      </div>

      <div class="pt-[84vh] relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          @click="scrollToElement('pandh')"
          class="transition duration-200 animation w-10 h-10 stroke-pinky hover:stroke-pinky-two animate-bounce cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
          />
        </svg>
      </div>
    </div>

    <div
      class="snap-center sm:w-screen sm:h-screen flex flex-row p-32 gap-4"
      id="pandh"
    >
      <div
        class="text-dark flex flex-col w-80 h-100 bg-grey opacity-75 rounded-lg"
      >
        <div class="text-center py-4">
          <h1 class="font-semibold text-xl">Experience</h1>
        </div>
        <div>capital one</div>
        <div>children's national hospital</div>
      </div>
      <div class="text-pinky">hello</div>
      <div class="text-pinky">hello</div>
      <div class="text-pinky">hello</div>
      <div class="text-pinky">hello</div>
      <div>hello</div>
      <div>hello</div>
    </div>
  </div>
</template>

<style scoped></style>
