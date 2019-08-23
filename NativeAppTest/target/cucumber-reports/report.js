$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/features/appLaunch.feature");
formatter.feature({
  "name": "Get Average of three numbers using Calculator App",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Launch Calculator and Add get the Average of three Positive numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Calculator is launched",
  "keyword": "Given "
});
formatter.step({
  "name": "I input \"\u003cinput1\u003e\" in Nota1",
  "keyword": "When "
});
formatter.step({
  "name": "I input \"\u003cinput2\u003e\" in Nota2",
  "keyword": "And "
});
formatter.step({
  "name": "I input \"\u003cinput3\u003e\" in Nota3",
  "keyword": "And "
});
formatter.step({
  "name": "I press Calculate button",
  "keyword": "And "
});
formatter.step({
  "name": "Average will appear",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "input1",
        "input2",
        "input3"
      ]
    },
    {
      "cells": [
        "3",
        "2",
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Launch Calculator and Add get the Average of three Positive numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Calculator is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "AddNumbersSteps.calculator_is__launched()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input \"3\" in Nota1",
  "keyword": "When "
});
formatter.match({
  "location": "AddNumbersSteps.I_press_one(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input \"2\" in Nota2",
  "keyword": "And "
});
formatter.match({
  "location": "AddNumbersSteps.I_press_plus_sing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input \"3\" in Nota3",
  "keyword": "And "
});
formatter.match({
  "location": "AddNumbersSteps.I_press_two(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press Calculate button",
  "keyword": "And "
});
formatter.match({
  "location": "AddNumbersSteps.I_press_equal_sign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Average will appear",
  "keyword": "Then "
});
formatter.match({
  "location": "AddNumbersSteps.Result_three_will_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Get the Average of Two Positive numbers and one Zero",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I input \"\u003cinput1\u003e\" in Nota1",
  "keyword": "When "
});
formatter.step({
  "name": "I input \"\u003cinput2\u003e\" in Nota2",
  "keyword": "And "
});
formatter.step({
  "name": "I input \"\u003cinput3\u003e\" in Nota3",
  "keyword": "And "
});
formatter.step({
  "name": "I press Calculate button",
  "keyword": "And "
});
formatter.step({
  "name": "Average will appear",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "input1",
        "input2",
        "input3"
      ]
    },
    {
      "cells": [
        "0",
        "2",
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Get the Average of Two Positive numbers and one Zero",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I input \"0\" in Nota1",
  "keyword": "When "
});
formatter.match({
  "location": "AddNumbersSteps.I_press_one(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input \"2\" in Nota2",
  "keyword": "And "
});
formatter.match({
  "location": "AddNumbersSteps.I_press_plus_sing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input \"2\" in Nota3",
  "keyword": "And "
});
formatter.match({
  "location": "AddNumbersSteps.I_press_two(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press Calculate button",
  "keyword": "And "
});
formatter.match({
  "location": "AddNumbersSteps.I_press_equal_sign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Average will appear",
  "keyword": "Then "
});
formatter.match({
  "location": "AddNumbersSteps.Result_three_will_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});