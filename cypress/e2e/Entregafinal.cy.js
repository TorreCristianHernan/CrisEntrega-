/// <reference types="cypress" />
import { RegisterPage } from "../support/pages/registerPage";
import{LoginPage} from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productsPage";
import { OnlinePage } from "../support/pages/onlinePage";



describe('Module Online Shope', () => {
    const registerPage = new RegisterPage() 
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const productsPage = new ProductsPage()
    const onlinePage = new OnlinePage()
    let logindata 
    let productos
    before('Before', () => {
        cy.fixture('logindata').then(data => { 
            logindata = data
    
        });
        cy.fixture('productos').then(data => {
            productos = data
            
        });
        
       
        beforeEach
    });
    it('', () => {  
        cy.visit('')
        registerPage.dobleClickRegister()
        loginPage.escribirUsuario(logindata.usuario)
        loginPage.escribirContraseña(logindata.contraseña)
        loginPage.clickLoginButton()
        homePage.clickOnlineShop()
        productsPage.clickAddtocart(productos.producto1.name)
        productsPage.clickAddtocart(productos.producto2.name)
        productsPage.clickGoToShoppingCart()
        onlinePage.clickShowTotalPrice()
        onlinePage.VerificoProductos()
        onlinePage.VerificoPrecios(productos.producto1.precio + productos.producto2.precio)
        
    });
    
});
