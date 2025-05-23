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

test.describe('Google page (RU)', () => {
  test('Test 2', { tag: '@apps/microservice2' }, async ({ ui }) => {
    await ui.google.goto();
    await ui.google.openAppsMenu();

    await ui.google.assertServiceVisible('YouTube');
    // await ui.google.assertServiceVisible('Youtube Music');
    await ui.google.assertServiceVisible('Диск');
    await ui.google.assertServiceVisible('Календарь');
    await ui.google.assertServiceVisible('Карты');
    await ui.google.assertServiceVisible('Почта');
  });
});

test.describe('Google page (RU)', () => {
  test('Test 3', { tag: '@apps/microservice3' }, async ({ ui }) => {
    await ui.google.goto();
    await ui.google.openAppsMenu();

    await ui.google.assertServiceVisible('YouTube');
    await ui.google.assertServiceVisible('Youtube Music');
    // await ui.google.assertServiceVisible('Диск');
    await ui.google.assertServiceVisible('Календарь');
    await ui.google.assertServiceVisible('Карты');
    await ui.google.assertServiceVisible('Почта');
  });
});

test.describe('Google page (RU)', () => {
  test('Test 4', { tag: '@apps/microservice4' }, async ({ ui }) => {
    await ui.google.goto();
    await ui.google.openAppsMenu();

    await ui.google.assertServiceVisible('YouTube');
    await ui.google.assertServiceVisible('Youtube Music');
    await ui.google.assertServiceVisible('Диск');
    await ui.google.assertServiceVisible('Календарь');
    await ui.google.assertServiceVisible('Карты');
    // await ui.google.assertServiceVisible('Почта');
  });
});

test.describe('Google page (RU)', () => {
  test('Test 5', async ({ ui }) => {
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