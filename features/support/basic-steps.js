const { After, Given, Then, When } = require('cucumber');

After(async function() {
  return this.closeHomePage()
})

Given("I visit the site", async function() {
  // Write code here that turns the phrase above into concrete actions
  return await this.openHomePage();
});

Then("I should see {string}", async function(content) {
  // Write code here that turns the phrase above into concrete actions
  return await this.pageHasTextContent(content)
});

When("...{string}", async function() {
  return "pending";
});

