<script setup lang="ts">
const props = defineProps<{ leader: Leader }>();

const headshot = computed(() => {
  const publicId = props.leader.headshot?.[0]?.public_id;
  return publicId
    ? `https://res.cloudinary.com/hillsboroughcounty/image/upload/w_150/t_WebP/${publicId}`
    : "https://res.cloudinary.com/hillsboroughcounty/image/upload/w_150/t_WebP/placeHolder_fdbk7l.gif";
});

const formatPhone = (num: number) => {
  const n = String(num);
  return `(${n.substring(0, 3)}) ${n.substring(3, 6)}-${n.substring(6, 10)}`;
};
</script>

<template>
  <UCard>
    <div class="flex">
      <a :href="headshot" target="_blank" class="basis-45 shrink-0 self-center"
        ><img :src="headshot" :alt="leader.full_name || leader.title"
      /></a>

      <div class="space-y-1">
        <h3 class="text-lg font-medium">
          {{ leader.full_name || leader.title }}
        </h3>
        <p class="font-thin mb-5">{{ leader.job_title }}</p>

        <div class="max-w-fit">
          <div class="hover:bg-gray-100">
            <a
              :href="`tel:${leader.phones[0].number}`"
              class="text-nowrap flex items-center gap-2"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              {{ formatPhone(leader.phones[0].number) }}
            </a>
          </div>

          <div class="hover:bg-gray-100">
            <USeparator class="my-1" />

            <a
              :href="`mailto:${leader.emails[0].address}`"
              class="text-nowrap flex items-center gap-2"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              Email
            </a>
          </div>

          <div v-if="leader.admin_assistant.length" class="hover:bg-gray-100">
            <USeparator class="my-1" />

            <a
              :href="`mailto:${leader.admin_assistant[0].emails[0].address}`"
              class="text-nowrap flex items-center gap-2"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <span class="flex flex-col">
                <span class="font-thin">Admin Assistant:</span>
                {{
                  leader.admin_assistant[0].full_name ||
                  leader.admin_assistant[0].title
                }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>
