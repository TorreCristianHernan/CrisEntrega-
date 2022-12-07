/// <reference types="cypress" />
import { RegisterPage } from "../support/pages/registerPage";
import{LoginPage} from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";



describe('Module Online Shope', () => {
    const registerPage = new RegisterPage() 
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const productsPage = new ProductsPage()
    const shoppingCartPage = new ShoppingCartPage()
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
        productsPage.agregarProducto(productos.producto1.name)
        productsPage.agregarProducto(productos.producto2.name)
        productsPage.clickGoToShoppingCart()
        shoppingCartPage.clickShowTotalPrice()
        shoppingCartPage.VerificoProductos(productos.producto1.name)
        shoppingCartPage.VerificoProductos(productos.producto2.name)
        shoppingCartPage.VerificoPrecios(productos.producto1.price)
        shoppingCartPage.VerificoPrecios(productos.producto2.price)
        shoppingCartPage.ValorSumaProductos(productos.producto1.price + productos.producto2.price)
       

        
        
    });
    
});
