const { Given, Then, When, After } = require('cucumber');

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

After(async function() {
    return await this.closeHomePage()
})