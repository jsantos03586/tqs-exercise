const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

function sumTwoNumbers(number1, number2) {
    return number1+number2;
}

Given('two numbers {int} and {int}', function (int, int2) {
    // Given('two numbers {int} and {float}', function (int, float) {
    // Given('two numbers {float} and {int}', function (float, int) {
    // Given('two numbers {float} and {float}', function (float, float2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

 When('I sum the numbers', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should obtain the result {int}', function (int) {
    // Then('I should obtain the result {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

