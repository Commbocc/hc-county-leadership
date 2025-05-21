import { contentstack_api } from "../utils/contentstack-api";

export default defineEventHandler(async (event) => {
  const { entries } = await contentstack_api<{
    entries: CountyLeadershipEntry[];
  }>("content_types/county_leadership/entries", {
    query: {
      "include[]": ["sections.leaders", "sections.leaders.admin_assistant"],
    },
  });

  return entries[0];
});
