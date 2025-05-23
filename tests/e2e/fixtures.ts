import { test as base } from '@playwright/test';
import { ExampleApi } from './api/exampleApi';
import { GoogleUi } from './ui/googleUi';

export const apiUiFixtures = base.extend<{
  api: {
    example: ExampleApi;
  };
  ui: {
    google: GoogleUi;
  };
}>({
  api: async ({ request }, use) => {
    await use({
      example: new ExampleApi(request),
    });
  },
  ui: async ({ page }, use) => {
    await use({
      google: new GoogleUi(page),
    });
  },
});

export const test = apiUiFixtures;
export { expect } from '@playwright/test';
