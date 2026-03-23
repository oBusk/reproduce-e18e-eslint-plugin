import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import rootConfig from "./eslint.config.mjs";

export default defineConfig(...rootConfig, {
  languageOptions: {
    parserOptions: {
      project: false,
      projectService: false,
    },
  },
  extends: [tseslint.configs.disableTypeChecked],
});
