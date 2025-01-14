import {test,expect} from '@playwright/test'
import { time } from 'console'

test('MultiXpath',async({page})=>{

   await page.goto('https://www.amazon.in/')

  // await page.waitForSelector('#anonCarousel2', { state: 'attached' })

  await page.waitForSelector('//div[@id="anonCarousel2"]//descendant::span[2]'),{timeout:120000}

   let a=await page.$$('//div[@id="anonCarousel2"]//descendant::span[2]')

   for(let i of a){
    let list=await i.textContent()
    console.log(list)
   }
})