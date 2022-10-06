<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ leader: Leader["fields"] }>();

const placeholderSrc =
  "https://www.hillsboroughcounty.org/library/hillsborough/head-shots/placeholder.gif";

const imgThumbSrc = computed(
  () => props.leader.image?.[0]?.thumbnails?.large?.url || placeholderSrc,
);

const imgFullSrc = computed(
  () => props.leader.image?.[0]?.url || placeholderSrc,
);

const joinedTitle = computed(() =>
  props.leader.department
    ? [props.leader.title, props.leader.department].join(": ")
    : props.leader.title,
);

const imgAlt = computed(() =>
  props.leader.image?.length
    ? props.leader.name
    : `${props.leader.name} - Not Pictured`,
);
</script>

<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-1">
        <a :href="imgFullSrc"
          ><img
            :src="imgThumbSrc"
            :alt="imgAlt"
            class="img-fluid rounded-start"
        /></a>
      </div>

      <div class="col-7 col-sm-8 col-md-9 col-lg-10 col-xl-11">
        <div class="card-body">
          <h5 class="card-title">{{ leader.name }}</h5>

          <p class="card-text text-muted">
            {{ joinedTitle }}
          </p>

          <div class="list-group list-group-flush">
            <a
              v-if="leader.phone"
              class="list-group-item list-group-item-action"
              :href="`tel:${leader.phone}`"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>

              &nbsp;

              {{ leader.phone }}
            </a>

            <a
              v-if="leader.email"
              class="list-group-item list-group-item-action"
              :href="`mailto:${leader.email}`"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                />
              </svg>

              &nbsp;

              {{ leader.email }}</a
            >
            <a
              v-if="leader.assistant"
              class="list-group-item list-group-item-action"
              :href="`mailto:${leader.assistant_email}`"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>

              &nbsp;

              {{ leader.assistant }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>