<script setup lang="ts">
const { execute, title, sections } = useLeaders();
await execute();
</script>

<template>
  <UContainer class="my-3">
    <Navigation></Navigation>

    <a id="top" class="my-5 block"></a>

    <LeaderSection v-for="section in sections" :section="section" />
  </UContainer>
</template>
