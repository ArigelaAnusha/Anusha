import{test,expect} from"@playwright/test"
test("second page", async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/inventory.html");
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
    await expect(page).toHaveTitle("Swag Labs");
    });

    test("second page2", async({page})=>{
       
        await page.goto("https://www.saucedemo.com/v1/inventory.html");
        await expect(page.getByText('Products')).toBeVisible();
        await expect(page.locator('.peek')).toBeVisible();
    });


    test("checking social media logo", async({page})=>{
    
        await page.goto("https://www.saucedemo.com/v1/inventory.html");
        await expect(page.getByText('Twitter')).toBeVisible();
        await expect(page.getByText('Facebook')).toBeVisible();
        await expect(page.getByText('LinkedIn')).toBeVisible();
    });

    test("Product Sorting", async({page})=>{
        await page.goto("https://www.saucedemo.com/v1/inventory.html");
        await page.getByRole('combobox').click();
        await page.locator('div').filter({ hasText: /^ProductsName \(A to Z\)Name \(Z to A\)Price \(low to high\)Price \(high to low\)$/ }).first().click();

    });

    test("clicking various products", async({page})=>{
        await page.goto("https://www.saucedemo.com/v1/inventory.html");
        await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
        await page.getByRole('button', { name: '<- Back' }).click();
        await page.getByRole('link', { name: 'Sauce Labs Fleece Jacket' }).click();
        await page.getByRole('button', { name: '<- Back' }).click();
        await page.getByRole('link', { name: 'Test.allTheThings() T-Shirt (Red)' }).click();
        await page.getByRole('button', { name: '<- Back' }).click();

    });