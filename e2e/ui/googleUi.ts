import { Page, expect } from '@playwright/test';
import { Ui } from './ui';

export class GoogleUi extends Ui {
  constructor(page: Page) {
    super(page);
  }

  private searchInput = () => this.page.getByRole('combobox', { name: /найти/i });
  private logo = () => this.page.getByAltText('Google');
  private results = () => this.page.locator('#search .g');
  private iframe = () => this.page.locator('iframe[name="app"]').first();
  private frame = () => this.iframe().contentFrame();
  private appsServices = (name:string) => this.frame().getByRole('link', { name: new RegExp(`^${name}:`, 'i') });
  private appsMenuButton = () => this.page.getByRole('button', { name: /приложения google/i });

  async goto() {
    await this.page.goto('https://www.google.com/?hl=ru');
  }


  async assertLogoVisible() {
    await this.logo().waitFor({ state: 'visible' });
  }

  async search(text: string) {
    await this.searchInput().fill(text);
    await this.searchInput().press('Enter');
  }

  async assertTitleContains(text: string) {
    await this.page.waitForFunction(
      (t) => document.title.includes(t),
      text
    );
  }

  async assertResultsContain(text: string) {
    await this.page.waitForSelector('#search');
    await this.page.waitForTimeout(500);
    await this.results().first().waitFor({ state: 'visible' });
    await this.page.waitForFunction(
      (t) => Array.from(document.querySelectorAll('#search .g')).some(el => (el as HTMLElement).innerText.toLowerCase().includes(t.toLowerCase())),
      text
    );
  }

  async openAppsMenu() {
    await this.appsMenuButton().click();
  }

  async assertServiceVisible(serviceName: string) {
    await expect(this.appsServices(serviceName)).toBeVisible();
  }
}
