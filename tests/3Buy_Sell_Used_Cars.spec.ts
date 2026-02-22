
import { test } from "@playwright/test";
import { CarPage } from "../pages/UsedCarsPage";
import { cities, login, language, search } from "../test_data/data.json";

test.describe("Buy & Sell Used Cars", () => {
        test(" Search for used cars by city @11 ", async ({ page }) => {
                const carPage = new CarPage(page);
                await carPage.navigateToHome();
                await carPage.searchUsedCarsByCity(cities.primary);
        });

        test(" Check dealer contact details @12 ", async ({ page }) => {
                const carPage = new CarPage(page);
                await carPage.navigateToHome();
                await carPage.checkDealerContactDetails(cities.primary);
        });
});
