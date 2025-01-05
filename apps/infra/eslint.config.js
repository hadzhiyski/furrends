import { config } from "@furrends/eslint-config/base";

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  { ignores: ["cdk.out/**", "**/*.js", "**/*.d.ts", "**/*.d.ts.map"] },
];
