1. **Clone the repository**

> git@ssh.dev.azure.com:v3/CoeraInternalApps/Matrix/MatrixTestAutomation

2. **Install all npm packages**

> cd MatrixTestAutomation
> npm install

3. **Install default browsers**

> npx playwright install

4. **Choose a Matrix instance where you want to run the tests and run them**

> a. Headed
>> npx playwright test --headed
>>
>b. Headless
>> npx playwright test

5. **Launch the Codegen tool on the dev environment to record or find locators**

> npx playwright codegen https://acc.foodbytesdigital.com
