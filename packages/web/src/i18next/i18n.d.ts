import type Resources from "../__generated__/resources";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof Resources;
  }
}
