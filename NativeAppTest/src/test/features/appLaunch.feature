Feature: Get Average of three numbers using Calculator App
  Scenario Outline: Launch Calculator and Add get the Average of three Positive numbers
    Given Calculator is launched
    When I input "<input1>" in Nota1
    And I input "<input2>" in Nota2
    And I input "<input3>" in Nota3
    And I press Calculate button
    Then Average will appear
    Examples:
      |input1  |input2|input3|
      |3       |2     |3     |
  Scenario Outline: Get the Average of Two Positive numbers and one Zero
    When I input "<input1>" in Nota1
    And I input "<input2>" in Nota2
    And I input "<input3>" in Nota3
    And I press Calculate button
    Then Average will appear
    Examples:
      |input1  |input2|input3|
      |0       |2     |2     |