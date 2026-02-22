import { test } from '@playwright/test';
import { NewCarsPage } from '../pages/NewCarsPage';

test.describe('New Cars Menu', () => {
        test('Find EV Charging Stations @15', async ({ page }) => {
                const newCars = new NewCarsPage(page);
                await newCars.gotoHome();
                await newCars.openEVChargingStations();
                await page.locator("img[alt$='Hyderabad']").click();
                await newCars.validateHeading('EV Charging Station in Hyderabad');
        });

        test('Find Fuel Stations @16', async ({ page }) => {
                const newCars = new NewCarsPage(page);
                await newCars.gotoHome();
                await newCars.openFuelStations();
                await newCars.validateHeading('Petrol Pumps');
        });

        test('Check Fuel Prices @17', async ({ page }) => {
                const newCars = new NewCarsPage(page);
                await newCars.gotoHome();
                await newCars.openFuelPrices();
                await newCars.validateHeading('Fuel price in India Today');
        });
});
