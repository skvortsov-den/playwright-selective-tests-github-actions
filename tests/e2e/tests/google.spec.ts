import { test } from '../src/test';

test.describe('Google page (RU)', () => {
  test('Проверка наличия сервисов в сэндвич-баре', { tag: '@apps/microservice1' }, async ({ ui }) => {
    await ui.google.goto();
    await ui.google.openAppsMenu();

    await ui.google.assertServiceVisible('YouTube');
    await ui.google.assertServiceVisible('Youtube Music');
    await ui.google.assertServiceVisible('Диск');
    await ui.google.assertServiceVisible('Календарь');
    await ui.google.assertServiceVisible('Карты');
    await ui.google.assertServiceVisible('Почта');
  });
});
