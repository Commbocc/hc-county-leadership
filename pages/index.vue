<script setup lang="ts">
const { execute, title, sections } = useLeaders();
await execute();
</script>

<template>
  <UContainer>
    <Navigation></Navigation>

    <header class="prose my-5">
      <h1>{{ title }}</h1>
    </header>

    <LeaderSection v-for="section in sections" :section="section" />
  </UContainer>
</template>
