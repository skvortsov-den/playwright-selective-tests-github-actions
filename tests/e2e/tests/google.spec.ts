import { test } from '../src/test';

test.describe('Google page (EN)', () => {
  test('Test 1', { tag: '@apps/microservice1' }, async ({ ui }) => {
    // TODO: add test
    await ui.google.goto();
    await ui.google.openAppsMenu();
    await ui.google.assertServiceVisible('YouTube');
    await ui.google.assertServiceVisible('YouTube Music');

  });
});

test.describe('Google page (EN)', () => {
  test('Test 2', { tag: '@apps/microservice2' }, async ({ ui }) => {
    await ui.google.goto();
    await ui.google.openAppsMenu();
    await ui.google.assertServiceVisible('Drive');
    await ui.google.assertServiceVisible('Calendar');
  });
});

test.describe('Google page (EN)', () => {
  test('Test 3', { tag: '@apps/microservice3' }, async ({ ui }) => {
    await ui.google.goto();
    await ui.google.openAppsMenu();
    await ui.google.assertServiceVisible('Maps');
    await ui.google.assertServiceVisible('Gmail');
  });
});

test.describe('Google page (EN)', () => {
  test('Test 4', { tag: '@apps/microservice4' }, async ({ ui }) => {
    await ui.google.goto();
    await ui.google.openAppsMenu();

    await ui.google.assertServiceVisible('YouTube');
    await ui.google.assertServiceVisible('Maps');
  });
});

test.describe('Google page (EN)', () => {
  test('Test 5', async ({ ui }) => {
    await ui.google.goto();
    await ui.google.openAppsMenu();
    await ui.google.assertServiceVisible('Calendar');
  });
});