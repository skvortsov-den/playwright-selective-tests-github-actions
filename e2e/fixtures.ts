import { test as base } from '@playwright/test';
import { OrdersApi } from './api/ordersApi';
import { ProjectApi } from './api/projectApi';
import { PaymentsApi } from './api/paymentsApi';
import { OrdersUi } from './ui/ordersUi';
import { PaymentsUi } from './ui/paymentsUi';
import { GoogleUi } from './ui/googleUi';

export const apiUiFixtures = base.extend<{
  api: {
    orders: OrdersApi;
    project: ProjectApi;
    payments: PaymentsApi;
  };
  ui: {
    orders: OrdersUi;
    payments: PaymentsUi;
    google: GoogleUi;
  };
}>({
  api: async ({ request }, use) => {
    await use({
      orders: new OrdersApi(request),
      project: new ProjectApi(request),
      payments: new PaymentsApi(request),
    });
  },
  ui: async ({ page }, use) => {
    await use({
      orders: new OrdersUi(page),
      payments: new PaymentsUi(page),
      google: new GoogleUi(page),
    });
  },
});

export const test = apiUiFixtures;
export { expect } from '@playwright/test';
