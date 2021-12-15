const { Given, When, Then } = require("@cucumber/cucumber");
const { By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
var seleniumWebdriver = require('selenium-webdriver');

const driver = new seleniumWebdriver.Builder().forBrowser('chrome').build();
//const driver = new seleniumWebdriver.Builder().forBrowser('firefox').build();
driver.close()

Given('I have visited the FEUP page on sigarra.up.pt', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('I go to the searchpage and write {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the page has {int} result', function (int) {
  // Then('the page has {float} result', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });