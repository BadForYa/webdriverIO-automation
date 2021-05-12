import { Then} from 'cucumber';
import loginpage from '../pageobject/login.page';
import landingPage from '../pageobject/langing.page';

Then(/^Check the account is logged in$/, function() {
    landingPage.checkloginaccount();
});

Then(/^Reload session$/, function() {
    browser.reloadSession();
});

Then(/^Check the error message$/, function() {
    loginpage.checkErrorMessage();
});