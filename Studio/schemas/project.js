export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    // ... other fields ...
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name"
      }
    },
    {
      name: "image",
      type: "image",
      hotspot: true
    },
    {
      name: "livelink",
      title: "Link to deployed site:",
      type: "url"
    },
  {
      name: "github",
      title: "Link to Github:",
      type: "url"
    },
    { name: "introText", type: "text", title: "Intro Text", description: "A quick 1-2 sentence overview of project." },
    {
      name: "description",
      type: "array",
      of: [{ type: "block" }],
      title: "Description",
      description: "Describe your project in greater detail here."
    },
    {
      title: "Skills",
      name: "skills",
      type: "array",
      of: [{ type: "string" }]
    }
  ]
};
