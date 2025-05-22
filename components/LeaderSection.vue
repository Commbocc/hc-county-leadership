<script setup lang="ts">
const props = defineProps<{ section: Section }>();
</script>

<template>
  <header class="prose my-3 flex justify-between">
    <h2 :id="toIdentifier(section.title)">{{ section.title }}</h2>

    <a href="#top" title="Back to Top">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-chevron-bar-up"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M3.646 11.854a.5.5 0 0 0 .708 0L8 8.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM2.4 5.2c0 .22.18.4.4.4h10.4a.4.4 0 0 0 0-.8H2.8a.4.4 0 0 0-.4.4z"
        />
      </svg>
    </a>
  </header>

  <Leader v-for="leader in section.leaders" :leader="leader" class="my-3" />
</template>
