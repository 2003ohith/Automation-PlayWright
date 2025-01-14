import {test,expect} from '@playwright/test'
import { time } from 'console'

test('MultiXpath',async({page})=>{

   await page.goto('https://www.amazon.in/')

   await page.waitForSelector('input[placeholder="Search Amazon.in"]')

   await page.fill('input[placeholder="Search Amazon.in"]','poco m2 pro')

   await page.click('#nav-search-submit-button')

   await page.waitForSelector('xpath=//div[@class="a-section"]//descendant::span[@class="a-price-whole"]')
   await page.waitForSelector('xpath=//div[@data-cy="title-recipe"]//descendant::h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]//child::span[1]')
   
   let a=await page.$$('xpath=//div[@data-cy="title-recipe"]//descendant::h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]//child::span[1]')
   let b=await page.$$('xpath=//div[@class="a-section"]//descendant::span[@class="a-price-whole"]')


   
   for(let i=0;i<a.length;i++){
    let list=await a[i].textContent()
    let list2=await b[i].textContent()
    console.log(`${list}------------>${list2}`)
   }

   //hello how are u
    

   await new Promise(()=>{});//to hold the browser
})