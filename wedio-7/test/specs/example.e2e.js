
const RetirementPage = require('../pageobjects/retirement.page');


describe('Navigate to URL', () => {

    it('Should be able to Enter Details', async () => {
        browser.url(`/insights-tools/retirement-calculator.html`);
       
        //await browser.pause(50000);
        RetirementPage.currAnnualSaving.waitForClickable({ timeout: 70000 });
        RetirementPage.initialDetailsRequired('40','68','10','2');
        RetirementPage.incomeValueSet('100000','75000','500000');

        RetirementPage.socialSecuritySetTrue('4000');

        RetirementPage.calculateTheResult();
    
        $('#result-message').waitForDisplayed({ timeout: 60000 });
        RetirementPage.verifyResults();

        if($('#calculator-input-alert').isDisplayed()){
            RetirementPage.calculateTheResult();
        }

        

    });
});


