import { Given, When, Then } from '@wdio/cucumber-framework';
import assert from 'assert';

import loginPage from '../pageobjects/login.page.js';

Given('User is located on the main page of saucedemo website', async () => {
    await browser.url('/');
});

When('User click "Login" button', async () => {
    const loginButton = await loginPage.loginButton;
    await loginButton.click();
});

Then('User should see "Epic sadface: Username is required" error message', async () => {
    const errorMessage = await $('.error-message-container');
    const errorText = await errorMessage.getText();
    assert.strictEqual(errorText, 'Epic sadface: Username is required');
});
