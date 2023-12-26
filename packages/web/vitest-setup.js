import "@testing-library/jest-dom";
import { beforeAll, beforeEach, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import i18n from "i18next";
import { globSync } from "glob";
import { i18nextConfig } from "./src/i18next/i18next-config";

// Setup the i18next instance.
i18nextConfig();

// Find all and load i18n.js bundles for the test environment.
// Loop over each and dynamically import the module.
// Loop over the namespaces under "en" in each (usually there would only be one, but I need the key name).
// Use the i18n.addResourceBundle to insert the bundle/namespace so the translations are available.
// This is essentially what the components do using the usei18n hook, but makes the translations available
// to the test environment so that we can use i18n values in expect statements.
// This is only needed for the `it` statements to do something like `expect(screen.getByText(t("namespace:token"))).toBeInTheDocument`.
// This does not affect whether the component being tested can render the translation...that is handled by the useI18n hook that lazy loads the bundle.
globSync("**/i18n.js").forEach(async (path) => {
  const bundle = await import(path);

  Object.keys(bundle.default.en).forEach((ns) => {
    i18n.addResourceBundle("en", ns, bundle.default.en[ns]);
  });
}, {});

beforeAll(() => {
  // Define a mock for Rooks useInViewRef hook.
  // Currently this is simply returning a null ref and always returns true for intersecting.
  vi.mock("rooks/dist/esm/hooks/useInViewRef", () => ({
    useInViewRef: vi.fn().mockReturnValue([null, true]),
  }));
});

beforeEach((context) => {
  context.user = userEvent.setup();

  // This is a separate user object configured without pointer event checks enabled
  // for use with tests that have trouble due to elements iwth pointer-events: none.
  context.userNoPointerCheck = userEvent.setup({ pointerEventsCheck: 0 });

  // Expose the i18n t function to all tests through the context.
  context.t = i18n.t;
});
