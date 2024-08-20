 import{test,expect} from"@playwright/test"
     test("checking url and title", async({page})=>{
        await page.goto('https://www.saucedemo.com/v1/inventory-item.html?id=4');
        await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory-item.html?id=4");
        await expect(page).toHaveTitle("Swag Labs");
    });

    test("checking buttons", async({page})=>{
        await page.goto('https://www.saucedemo.com/v1/inventory-item.html?id=4');
        await expect(page.getByRole('button', { name: '<- Back' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'ADD TO CART' })).toBeVisible();
    });

    test("adding product to cart", async({page})=>{
        await page.goto('https://www.saucedemo.com/v1/inventory-item.html?id=4');
        await page.getByRole('button', { name: 'ADD TO CART' }).click();
    });

    test("Removing products from cart", async({page})=>{
        await page.goto('https://www.saucedemo.com/v1/inventory-item.html?id=4');
        await page.getByRole('button', { name: 'ADD TO CART' }).click();
        await page.getByRole('button', { name: 'REMOVE' }).click();

    });

    test("Logout", async({page})=>{
        await page.goto('https://www.saucedemo.com/v1/inventory-item.html?id=4');
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();

    });