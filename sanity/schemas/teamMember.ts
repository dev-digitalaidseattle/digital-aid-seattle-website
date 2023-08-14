export default {
    name: 'team-member',
    type: 'document',
      title: 'Team Member',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
        fields: [
            {
                name: 'alt',
                title: 'Alt',
                type: 'string'
            }
        ]
      },
    ]
  }