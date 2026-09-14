export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('project').title('Projects'),
      S.listItem()
        .id('layout')
        .title('Layout')
        .child(S.document().schemaType('layout').documentId('layout').title('Layout')),
    ])
