<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { sections } = useLeaders();

const items = ref<NavigationMenuItem[][]>([
  [
    ...(sections.value?.map((section) => ({
      label: section.title,
      to: `#${toIdentifier(section.title)}`,
    })) ?? []),
  ],
  [],
]);
</script>

<template>
  <UNavigationMenu color="neutral" variant="link" :items="items" />
</template>

<style>
nav > div > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

nav > div > ul > li {
  min-width: min-content;
  padding: 0;
}
</style>
