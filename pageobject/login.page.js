import Page from './page';

class LoginPage extends Page {

    get usernameInput() {
        return $('//*[@id="sso_username"]');
    }

    get passwordInput() {
        return $('//*[@id="ssopassword"]');
    }

    get loginButton() {
        return $('//*[@id="signin_button"]');
    }

    get loginbox() {
        return $('/html/body/div/div[3]/div[1]');
    }

    get messagebox() {
        return $('//*[@id="errormsg"]');
    }

    waitForloginPageToLoad() {
        if(!this.loginbox.isDisplayed()) {
            this.loginbox.waitForDisplayed(2000);
        }
    }

    login (username, password) {
        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);
        this.loginButton.click();
    }

    checkErrorMessage() {
        expect(this.messagebox).toHaveText('用户名和/或密码无效。');
    }
}

export default new LoginPage()