import { Page, expect } from '@playwright/test';
import { Ui } from './ui';

export class GoogleUi extends Ui {
  constructor(page: Page) {
    super(page);
  }
  private appsMenuButton = () => this.page.getByRole('button', { name: 'Google apps' });
  private iFrame = () => this.page.locator('iframe[name="app"]');
  private appsFrame = () => this.page.frameLocator('[name="app"]');
  private appsServices = (name: string) => this.appsFrame().getByRole('link', { name: new RegExp(`^${name}(,|$)`) });

  async goto() {
    await this.page.goto('https://www.google.com/?hl=en');
  }

  async openAppsMenu() {
    await this.appsMenuButton().click();
    await this.iFrame().waitFor({ state: 'visible'});
  }

  async assertServiceVisible(serviceName: string) {
    await expect(this.appsServices(serviceName)).toBeVisible();
  }
}
