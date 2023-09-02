import { Selector } from 'testcafe';

// Define selectors for the username input, password input, and login button
const nameInput = Selector('#username');
const passwordInput = Selector('#password');
const loginButton = Selector('#login');

fixture('Login Tests')
  .page('https://dev.deepthought.education/login');

test('Unsuccessful Login', async (t) => {
  await t
    .maximizeWindow()
    .typeText(nameInput, 'invalid_user') // Replace with an invalid username
    .typeText(passwordInput, 'invalid_password') // Replace with an invalid password
    .click(loginButton)
});
