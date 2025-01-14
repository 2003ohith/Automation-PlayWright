let {test,expect}=require('@playwright/test');

test('Check Title',async({page})=>{

   let a = await page.goto('https://www.amazon.in/')
   console.log(a)

   let pageUL=await page.url()
   console.log(pageUL)

   await expect(page).toHaveURL('https://www.amazon.in/')

   let b=await page.title()
   console.log(b)

   await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')

   await page.close

})

/*
npx playwright test --> runs and test files in tests folder 
npx playwright test Title_Url.spec.js --> runs the specific file
npx playwright test  Title_Url.spec.js--headed --> runs the test in headed mode
npx playwright test  Title_Url.spec.js--headed --debug --> runs the test in headed mode and debugger mode 
npx playwright show-report --> shows the report of the test cases
npx playwright test Title_Url.spec.js --project=chromium --> runs the test in chromium browser


*/
