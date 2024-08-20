import{test,expect} from"@playwright/test"
test("sauce Demo", async({page})=>{
await page.goto("https://www.saucedemo.com/v1/");
await expect(page).toHaveURL("https://www.saucedemo.com/v1/");
await expect(page).toHaveTitle("Swag Labs");
});

test("visible", async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
});

test("Login Button visibility", async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");
    await expect(page.getByRole('button', { name: 'LOGIN' })).toBeVisible();
});

test("checking Headings", async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");
    await expect(page.getByRole('heading', { name: 'Accepted usernames are:' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Password for all users:' })).toBeVisible();
});

test("LOGIN page", async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");
    await page.getByPlaceholder("Username").fill('standard_user');
    await page.getByPlaceholder("Password").fill('secret_sauce');
    await page.getByRole("button",{name:"LOGIN"}).click();
});



   