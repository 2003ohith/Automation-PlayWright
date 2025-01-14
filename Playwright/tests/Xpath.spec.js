/*Locators:
1.id
2.class

*/

import {test,expect} from '@playwright/test' 

test('Propery Locators',async({page})=>{

   await page.goto('https://www.amazon.in/')

   await page.locator('[id="twotabsearchtextbox"]').click()
   await console.log("clicked")
   
   await page.click('a#nav-link-accountList')
   await expect(page).toHaveURL(/.*amazon\.in\/ap\/signin/);

   await page.locator('#email').fill('Ohith@2003')

   await console.log("filled email")


})