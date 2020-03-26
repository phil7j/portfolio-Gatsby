export default {
    name: "people",
  title: "People",
  type: "document",
  fields: [
    {
        name: "name",
        title: "Name",
        type: "string"
      },
    {
        name: "linkedin",
        title: "LinkedIn URL",
        type: "url"
      },
    {
        name: "github",
        title: "GitHub URL",
        type: "url"
      },

    //   In the future I could add Picture, name, description.. etc..  and source my front end to it
  ]
}