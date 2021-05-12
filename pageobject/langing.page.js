import Page from './page';

class LandingPage extends Page {

    get myaccountbutton() {
        return $('//*[@id="u28"]/div[1]/div/div[3]/div[1]');
    }

    get loginpage() {
        return $('//*[@id="u28"]/div[1]/div/div[3]/div[1]/div/ul[1]/li[1]');
    }

    get loginaccount() {
        return $('//*[@id="u28"]/div[1]/div/div[3]/div[1]/div/ul[2]/li[1]');
    }

    myaccount() {
        this.myaccountbutton.click();
        
    }
    
    gotologinpage() {
        this.loginpage.click();
    }

    checkloginaccount() {
        this.myaccountbutton.click();
        expect(this.loginaccount).toHaveText('zhou zhou');
    }
}
export default new LandingPage()