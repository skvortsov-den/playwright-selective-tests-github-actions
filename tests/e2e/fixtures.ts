import { test as base } from '@playwright/test';
import { OrdersApi } from './api/ordersApi';
import { GoogleUi } from './ui/googleUi';

export const apiUiFixtures = base.extend<{
  api: {
    orders: OrdersApi;
  };
  ui: {
    google: GoogleUi;
  };
}>({
  api: async ({ request }, use) => {
    await use({
      orders: new OrdersApi(request),
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
