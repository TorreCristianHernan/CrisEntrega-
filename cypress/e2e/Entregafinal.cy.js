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
        const username ='usuariiiiiiiosssssssssss1'
        const password= '123456!'
        const gender='Male'
        const day='5'
        const month='October'
        const year= '1988'

        cy.request({
            method: "POST",
            url: "https://pushing-it.onrender.com/api/register",
            body:{
                username: username,
                password: password,
                gender:gender,
                day: day,
                month: month,
                year: year
            }
        }).then( respuesta => {
            expect(respuesta.status).is.equal(200)
            expect(respuesta.body.newUser.username).is.equal(username)
        
        });
            
            cy.request({
                method: "POST",
                url:  "https://pushing-it.onrender.com/api/login",
                body:{
                    username: username,
                    password: password,
    
                }
     
            }).then( respuesta => {
                window.localStorage.setItem('token',respuesta.body.token)
                window.localStorage.setItem('user',respuesta.body.user.username)

            })
        
        
            cy.visit('')
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
       recibepage.VerificoNombre().should('include.text','Cristian Torre')
       recibepage.VerificoProductos(productos.producto1.name).should('include.text','Black Socks')
       recibepage.VerificoProductos(productos.producto2.name).should('include.text','Beige Shorts')
       recibepage.VerificoTarjeta().should('include.text','1234567891234567')
       recibepage.VerificoSuma().should('include.text','29')
       
        }) 
   
    afterEach('elimino usuario',() => {
         cy.request({
                method:"DELETE",
                url: `https://pushing-it.onrender.com/api/deleteuser/${username}`,
            }).then(respuesta=>{
                    cy.log(respuesta)
               
                
            
            })
      
    })
    })
    

