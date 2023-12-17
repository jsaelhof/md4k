import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../api/graphql/schemas/schema.graphql",
  documents: "src/**/*.ts*",
  generates: {
    "src/__generated__/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
