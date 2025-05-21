<script setup lang="ts">
const props = defineProps<{ leader: Leader }>();

const headshot = computed(
  () =>
    `https://res.cloudinary.com/hillsboroughcounty/image/upload/w_150/t_WebP/${props.leader.headshot[0].public_id}`
);
</script>

<template>
  <UCard>
    <div class="flex gap-3">
      <img :src="headshot" :alt="leader.full_name" />

      <div>
        <h3>{{ leader.full_name }}</h3>
        <p>{{ leader.job_title }}</p>
      </div>
    </div>
  </UCard>
</template>
