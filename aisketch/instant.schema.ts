// Docs: https://www.instantdb.com/docs/modeling-data

import { i } from "@instantdb/react-native";

const _schema = i.schema({
  entities: {
    elements: i.entity({
      type: i.string(),
      x: i.number(),
      y: i.number(),
      width: i.number(),
      color: i.string(),
      height: i.number(),
      createdAt: i.string(),
    }),
  },
  links: {},
  rooms: {},
});

// This helps Typescript display nicer intellisense
type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };
export default schema;
