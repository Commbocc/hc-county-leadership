<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { sections } = useLeaders();

const items = ref<NavigationMenuItem[][]>([
  [
    ...(sections.value?.map((section) => ({
      label: section.title,
      // icon: "i-lucide-book-open",
      to: `#${toIdentifier(section.title)}`,
    })) ?? []),
  ],
  [],
]);
</script>

<template>
  <UNavigationMenu
    color="neutral"
    variant="link"
    :items="items"
    class="w-full"
  />
</template>
