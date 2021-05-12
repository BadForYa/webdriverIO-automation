import { fromPairs } from "lodash";
import { When} from 'cucumber';
import loginPage from '../pageobject/login.page';
import * as data from '../datas/login.json';

When(/^Enter username and password of "([^"]*)"$/, function(group) {
    const username = data[group].username;
    const password = data[group].password;
    console.log(username);
    console.log(password);
    
    loginPage.login(username, password);
});