package pageObjects;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AndroidFindBys;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

/**
 * Created by Sakib on 11/18/2018.
 */
public class CalculatorPageObjects {

    AndroidDriver driver;

    public CalculatorPageObjects(AndroidDriver driver){
        this.driver=driver;
        PageFactory.initElements(new AppiumFieldDecorator(driver), this);

    }

    @AndroidFindBys({
            @AndroidFindBy(id="com.android.calculator2:id/formula"),
            @AndroidFindBy(xpath="//android.widget.EditText[@text='3']")
    })
    public List<WebElement> four;


    @AndroidFindBy(xpath = "//android.widget.EditText[@index='1']")
    public WebElement inputOne;

    @AndroidFindBy(xpath = "//android.widget.EditText[@index='3']")
    public WebElement inputTwo;

    @AndroidFindBy(xpath = "//android.widget.EditText[@index='5']")
    public WebElement inputThree;

    @AndroidFindBy(xpath = "//android.widget.Button[@index='6']")
    public WebElement calculate;

    @AndroidFindBy(xpath = "//android.widget.TextView[@index='8']")
    public WebElement result;


    public void inputOne(String inputOne){this.inputOne.sendKeys(inputOne);}

    public void inputTwo(String inputTwo){
        this.inputTwo.sendKeys(inputTwo);
    }

    public void inputThree(String inputThree){
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        this.inputThree.sendKeys(inputThree);}

    public void clickEqual(){
        this.calculate.click();
    }


    public String getText(){
        return this.result.getText();
    }

}
