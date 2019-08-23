package step_definitions;

import cucumber.TestContext;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import manager.FileReaderManager;
import org.junit.Assert;

import pageObjects.CalculatorPageObjects;
import testDataTypes.TestNumbers;

import java.net.MalformedURLException;

/**
 * Created by Sakib on 11/11/2018.
 */
public class AddNumbersSteps {
    String inputOne;
    String inputTwo;
    String inputThree;


    CalculatorPageObjects calc;
    TestContext testContext;

    public AddNumbersSteps(TestContext context) {
        testContext = context;
        calc = testContext.getPageObjectManager().getCalculator();
    }

    @Given("^Calculator is launched$")
    public void calculator_is__launched() throws MalformedURLException
    {
        System.out.print("Launched");
    }

    @When("^I input \"([^\"]*)\" in Nota1$")
    public void I_press_one(String inputOne) throws Throwable {
        this.inputOne=inputOne;
        calc.inputOne(inputOne);
        // Express the Regexp above with the code you wish you had
        //throw new PendingException();
    }

    @And("^I input \"([^\"]*)\" in Nota2$")
    public void I_press_plus_sing(String inputTwo) throws Throwable {
        this.inputTwo=inputTwo;
        calc.inputTwo(inputTwo);
//        throw new PendingException();
    }

    @And("^I input \"([^\"]*)\" in Nota3$")
    public void I_press_two(String inputThree) throws Throwable {
        this.inputThree=inputThree;
        calc.inputThree(inputThree);
        //      throw new PendingException();
    }

    @And("^I press Calculate button$")
    public void I_press_equal_sign() throws Throwable {
        // Express the Regexp above with the code you wish you had
        calc.clickEqual();
        //    throw new PendingException();
    }

    @Then("^Average will appear$")
    public void Result_three_will_appear() throws Throwable {

        float realAvg=((float)Integer.parseInt(inputOne)+(float)Integer.parseInt(inputTwo)+(float)Integer.parseInt(inputThree))/(float) 3;
        String avg= Float.toString(realAvg);

        Thread.sleep(1000);
        String text=calc.getText();

        float avgFromApp = Float.parseFloat(text);
        String formattedString = String.format("%.07f", avgFromApp);

        Assert.assertEquals(formattedString, avg);

    }

//    @Then("^Result (\\d+) will appear$")
//    public void Result_three_will_appear(String three) throws Throwable {
//        Thread.sleep(2000);
//        TestNumbers numbers = FileReaderManager.getInstance().getJsonReader().getCustomerByName(3);
//        System.out.print("Three from cucumber"+three);
//        Assert.assertEquals(""+numbers.number, calc.getText());
//    }
}
