import { Page, Locator, expect } from "@playwright/test";

export class NewsPage {
        readonly page: Page;
        readonly mainMenu: Locator;

        constructor(page: Page) {
                this.page = page;
                this.mainMenu = page.locator('.mainMenu', { hasText: 'News & Reviews' });
        }

        async openNewsAndTopStories() {
                try {
                        await this.mainMenu.hover();
                        await this.page.locator('li').getByText('News & Top stories').click();
                        await this.page.waitForLoadState('domcontentloaded');
                }
                catch (err) {
                        throw new Error(`Failed to open News & Top stories: ${err}`);
                }
        }

        async validateFirstNewsArticle() {
                try {

                        await this.page.waitForSelector('.newsHeight .title a');
                        await this.page.locator('.newsHeight .title a').first().click();

                        await this.page.waitForTimeout(3 * 1000);

                        await expect(this.page.locator('h1:visible')).toBeVisible();

                }
                catch (err) {
                        throw new Error(`News article validation failed: ${err}`);
                }
        }

        async openExpertReviews() {
                try {

                        await this.mainMenu.hover();
                        await this.page.locator('li').getByText('Car Expert Reviews').click();
                        await this.page.waitForTimeout(2000);


                } catch (err) {
                        throw new Error(`Failed to open Expert Reviews: ${err}`);
                }
        }

        async validateFirstExpertReview() {
                try {

                        await this.page.waitForSelector('.title a');
                        await this.page.locator('.title a').first().click();

                        await this.page.waitForTimeout(3 * 1000);

                        await expect(this.page.locator('h1:visible')).toBeVisible();



                } catch (err) {
                        throw new Error(`Expert review validation failed: ${err}`);
                }
        }
}
