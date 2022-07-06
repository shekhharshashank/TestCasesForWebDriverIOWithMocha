
/**
 *  page containing specific selectors and methods for a specific page
 */

 const Page = require('./page');

 class RetirementPage {

 /**
     * define selectors using getter methods
     */

  get currAge () { return $('#current-age') }
  get retireAge () { return $('#retirement-age') }
  get currAnnualSaving () { return $('#current-annual-savings') }

  get savIncRate () { return $('#savings-increase-rate')}
  get yesBenfts () { return $('#include-social-container > ul > li:nth-child(1) > label')}
  get married () { return $('#marital-status-ul > li:nth-child(2) > label')}
  get ssOverride () { return $('#social-security-override')}

  get currAnnualIncm () { return $('#current-income')}
  get spouseAnnualIncm () { return $('#spouse-income')}
  get currTotalSaving () { return $('#current-total-savings')}

  get calcuList () { return $('button.dsg-btn-primary.btn-block')}

  get getResult () { return $('#result-message')}

  calculateTheResult(){
    console.log(this.calcuList.waitForClickable({ timeout: 8000 }));
    console.log(this.calcuList.click());

  }

  incomeValueSet(currAnnualIncmV,spouseAnnualIncmV,currTotalSavingV){

    this.currAnnualIncm.doubleClick();
    this.currAnnualIncm.addValue(currAnnualIncmV);

        //spouseAnnualIncm.isFocused();
        this.spouseAnnualIncm.doubleClick();
        this.spouseAnnualIncm.addValue(spouseAnnualIncmV);

        this.currTotalSaving.doubleClick();
        this.currTotalSaving.addValue(currTotalSavingV);

}



 
initialDetailsRequired(currAgeV,retireAgeV,currAnnualSavingV,savIncRateV){

    this.currAge.waitForClickable({ timeout: 5000 });
    this.currAge.click();
    this.currAge.setValue(currAgeV);
    this.retireAge.setValue(retireAgeV);
    this.currAnnualSaving.waitForClickable({ timeout: 5000 });
    this.currAnnualSaving.setValue(currAnnualSavingV);
    this.savIncRate.setValue(savIncRateV);

 }

 socialSecuritySetTrue(ssOverrideV){
    this.yesBenfts.click();
    this.married.waitForClickable({ timeout: 5000 });
    this.married.click();

    this.ssOverride.waitForClickable({ timeout: 5000 });
    this.ssOverride.doubleClick();
    this.ssOverride.addValue(ssOverrideV);

 }

 verifyResults(){

     expect($('#result-message')).toExist();
     expect(this.getResult.getText()).toHaveValueContaining('Congratulations!');
   
 }

 



}

module.exports = new RetirementPage();