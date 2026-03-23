import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import e18e from "@e18e/eslint-plugin";

export default defineConfig({
  files: ["**/*.ts"],
  extends: [
    tseslint.configs.base, 
    e18e.configs.recommended,
  ],
});
