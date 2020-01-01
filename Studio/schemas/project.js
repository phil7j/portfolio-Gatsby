export default {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
      // ... other fields ...
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'image',
        type: 'image',
        hotspot: true
      }
    ]
  }