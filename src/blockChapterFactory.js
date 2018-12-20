export function createBlockChapter({ schema, uiSchema }) {
  return {
    title: "I'm for blocks!",
    pages: {
      block: {
        path: "block",
        title: "I'm for blocks!",
        schema: {
          type: "object",
          properties: schema
        },
        uiSchema: uiSchema
      }
    }
  };
}
