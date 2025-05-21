<script setup lang="ts">
const props = defineProps<{ section: Section }>();
</script>

<template>
  <header class="prose my-3">
    <h2 :id="toIdentifier(section.title)">{{ section.title }}</h2>
  </header>

  <Leader v-for="leader in section.leaders" :leader="leader" class="my-3" />
</template>
