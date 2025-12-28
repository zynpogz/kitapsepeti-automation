class LoginPage {
    email() {
        return cy.get('input[type="email"], input[name="email"]').first()
    }

    password() {
        return cy.get('input[type="password"], input[name="password"]').first()
    }

    submit() {
        return cy.get('button[type="submit"], button').contains(/giriş yap|login/i)
    }
}

export default LoginPage