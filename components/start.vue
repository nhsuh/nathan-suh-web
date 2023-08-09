<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import DownArrow from "~/components/down-arrow.vue";
const fadeIn = ref(true);
const isVisible = ref(true);
onMounted(() => {
  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  // Remove scroll event listener when component is unmounted
  window.removeEventListener("scroll", handleScroll);
});
function handleScroll() {
  const element = document.querySelector(".fade-on-scroll-element");
  const elementTop = element?.getBoundingClientRect().top;
  const elementBottom = element?.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;

  // Check if element is in view
  if (!elementTop || !elementBottom) return;
  fadeIn.value = elementTop < windowHeight * 0.6 && elementBottom > 0;
}
const scrollToElement = (where: string) => {
  isVisible.value = false;
  document.getElementById(where)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="snap-y overflow-y-scroll snap-proximity">
    <div
      id="norm"
      class="snap-center overscroll-y-contain sm:w-screen sm:h-screen flex flex-col pt-8 sm:pt-0 items-center sm:justify-center"
    >
      <intro></intro>
      <div
        class="pt-[84vh] relative down-arrow"
        v-if="isVisible"
        @click="scrollToElement('pandh')"
      >
        <down-arrow></down-arrow>
      </div>
    </div>

    <div
      class="snap-center sm:w-screen sm:h-screen flex flex-row p-32 gap-4 fade-on-scroll-element opacity-0 transition-opacity duration-700"
      :class="{ 'opacity-100': fadeIn }"
      id="pandh"
    >
      <experiences></experiences>
      <div
        class="w-[800px] bg-gradient-to-tr from-fern to-gren rounded-lg text-center flex flex-col justify-center"
      >
        <div class="text-7xl font-bold">Coming Soon</div>
        <div class="pt-3">
          <div>More experiences</div>
          <div>Personal Projects</div>
          <div>Hobbies</div>
          <div>Mobile Support</div>
          <div>About Me</div>
          <div>Dark Mode-Light Mode Toggle</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
