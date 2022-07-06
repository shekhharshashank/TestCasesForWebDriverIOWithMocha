

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    
    get currAge () { return $('#current-age') }
    get retireAge () { return $('#retirement-age') }
    get currAnnualSaving () { return $('#current-annual-savings') }
  
    get savIncRate () { return $('#savings-increase-rate')}
    get yesBenfts () { return $('#include-social-container > ul > li:nth-child(1) > label')}
    get married () { return$('#marital-status-ul > li:nth-child(2) > label')}
    get ssOverride () { return$('#social-security-override')}
  
    get currAnnualIncm () { return $('#current-income')}
    get spouseAnnualIncm () { return $('#spouse-income')}
    get currTotalSaving () { return $('#current-total-savings')}
  
    get calcuList () { return $('button.dsg-btn-primary.btn-block')}
  
  
    calculateTheResult(){
      console.log(calcuList.waitForClickable({ timeout: 8000 }));
      console.log(calcuList.click());
  
    }
  
    incomeValueSet(currAnnualIncmV,spouseAnnualIncmV,currTotalSavingV){
  
      currAnnualIncm.doubleClick();
          currAnnualIncm.addValue(currAnnualIncmV);
  
          //spouseAnnualIncm.isFocused();
          spouseAnnualIncm.doubleClick();
          spouseAnnualIncm.addValue(spouseAnnualIncmV);
  
          currTotalSaving.doubleClick();
          currTotalSaving.addValue(currTotalSavingV);
  
  }
  
  
  
   initialDetailsRequired(currAgeV,retireAgeV,currAnnualSavingV,savIncRateV){
  
      currAge.click();
      currAge.setValue(currAgeV);
      retireAge.setValue(retireAgeV);
      currAnnualSaving.setValue(currAnnualSavingV);
      savIncRate.setValue(savIncRateV);
  
   }
  
   socialSecuritySetTrue(yesBenftsV,marriedV,ssOverrideV){
      yesBenfts.click();
      married.waitForClickable({ timeout: 5000 });
      married.click();
  
      ssOverride.waitForClickable({ timeout: 5000 });
      ssOverride.doubleClick();
      ssOverride.addValue('4000');
  
   }
  
   
  
  
}

module.exports = new LoginPage();
