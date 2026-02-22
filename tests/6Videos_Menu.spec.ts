import { test } from "@playwright/test";
import { VideosPage } from "../pages/videosPage"; // adjust path as needed

test.describe("Videos Menu", () => {

        test("Video Reviews @18", async ({ page }) => {
                const videosPage = new VideosPage(page);

                await videosPage.gotoHome();
                await videosPage.openVideoReviews();
                await videosPage.expectHeaderContains("Cars videos, car video clips");
        });

        test("Visual Stories @19", async ({ page }) => {
                const videosPage = new VideosPage(page);

                await videosPage.gotoHome();
                await videosPage.openVisualStories();
                await videosPage.expectHeaderContains("Car visual stories");
        });

});
