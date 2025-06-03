<script setup lang="ts">
const { execute, title, sections } = useLeaders();
await execute();
</script>

<template>
  <UContainer class="my-3">
    <Navigation></Navigation>

    <header id="top" class="my-5"></header>

    <LeaderSection v-for="section in sections" :section="section" />
  </UContainer>
</template>
