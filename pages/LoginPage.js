export class LoginPage{
    constructor(page){
        this.page=page;
        this.userEmail = page.locator('#email');
        this.userPassword = page.locator('#password')
        this.loginButton = page.locator("//button[@type='submit']")
    }

    async navigate(){
        await this.page.goto('/');
    }
    async login(email,password) {
        await this.userEmail.fill(email);
        await this.userPassword.fill(password);
        await this.loginButton.click()
    }
}