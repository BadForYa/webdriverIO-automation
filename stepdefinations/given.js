import loginPage from '../pageobject/login.page';
import landingPage from '../pageobject/langing.page'
import { Given } from 'cucumber';

Given(/^Open oracle's login page$/,function() {
    landingPage.open("");
    landingPage.myaccount();
    landingPage.gotologinpage();
    loginPage.waitForloginPageToLoad();
    expect(browser).toHaveTitle('Oracle 登录 - 单点登录');
});