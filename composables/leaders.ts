export const useLeaders = () => {
  const { data, execute } = useFetch(`/api/leaders`);

  const title = computed(() => data.value?.title);

  const sections = computed(() => data.value?.sections);

  return { data, execute, title, sections };
};
