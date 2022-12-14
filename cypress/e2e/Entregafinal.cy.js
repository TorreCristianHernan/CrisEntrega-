/// <reference types="cypress" />
import { RegisterPage } from "../support/pages/registerPage";
import{LoginPage} from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";
import {  CheckoutPage } from "../support/pages/checkoutPage";
import{ RecibePage } from     "../support/pages/recibePage"




describe('Module Online Shope', () => {
    const recibepage = new RecibePage()  
    const registerPage = new RegisterPage() 
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const productsPage = new ProductsPage()
    const shoppingCartPage = new ShoppingCartPage()
    const checkoutPage = new CheckoutPage()
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
        shoppingCartPage.VerificoProductos(productos.producto1.name).should('include.text','Black Socks')
        shoppingCartPage.VerificoProductos(productos.producto2.name).should('include.text','Beige Shorts')
        shoppingCartPage.VerificoPrecios(productos.producto1.price).should('include.text','10')
        shoppingCartPage.VerificoPrecios(productos.producto2.price).should('include.text', '19')
        shoppingCartPage.ValorSumaProductos(productos.producto1.price + productos.producto2.price).should('include.text', '29')
       shoppingCartPage.clickGotoCheckout()
       checkoutPage.escribirname(logindata.Firstname)
       checkoutPage.escribirlastname(logindata.Lastname)
       checkoutPage.escribircardnumber(logindata.CardNumber)
       checkoutPage.clickPurchase()
       checkoutPage.Esperar10segundos()
       recibepage.Ver


       
       
    })    
    });
    

