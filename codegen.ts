import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.graphql",
  generates: {
    "src/server/graphql/generate/resolver-types.types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
