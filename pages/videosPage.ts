import { Page, Locator, expect } from "@playwright/test";

export class VideosPage {
        readonly page: Page;
        readonly videosMenu: Locator;
        readonly videoReviewsLink: Locator;
        readonly visualStoriesLink: Locator;
        readonly header: Locator;

        constructor(page: Page) {
                this.page = page;
                this.videosMenu = page.locator('span:has-text("VIDEOS")').first();
                this.videoReviewsLink = page.getByText('Video Reviews', { exact: true });
                this.visualStoriesLink = page.getByText('Visual Stories', { exact: true });
                this.header = page.locator('h1');
        }

        async gotoHome() {
                await this.page.goto("/");
        }

        async openVideoReviews() {
                await this.videosMenu.hover();
                await this.videoReviewsLink.click();
        }

        async openVisualStories() {
                await this.videosMenu.hover();
                await this.visualStoriesLink.click();
        }

        async expectHeaderContains(text: string) {
                await expect(this.header).toContainText(text);
        }
}
