import { Page, Locator, expect } from '@playwright/test';

export class NewCarsPage {
        readonly page: Page;
        readonly newCarsMenu: Locator;
        readonly evChargingStations: Locator;
        readonly fuelStations: Locator;
        readonly fuelPrices: Locator;

        constructor(page: Page) {
                this.page = page;
                this.newCarsMenu = page.getByText('NEW CARS', { exact: true });
                this.evChargingStations = page.getByText('Find EV Charging Stations', { exact: true });
                this.fuelStations = page.getByText('Find Fuel Stations', { exact: true });
                this.fuelPrices = page.getByText('Check Fuel Prices', { exact: true });
        }

        async gotoHome() {
                await this.page.goto('/');
        }

        async openEVChargingStations() {
                await this.newCarsMenu.hover();
                await this.evChargingStations.click();
        }

        async openFuelStations() {
                await this.newCarsMenu.hover();
                await this.fuelStations.click();
        }

        async openFuelPrices() {
                await this.newCarsMenu.hover();
                await this.fuelPrices.click();
        }

        async validateHeading(expectedText: string) {
                await expect(this.page.locator('h1')).toContainText(expectedText);
        }
}
