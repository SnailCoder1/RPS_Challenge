const { Given, Then, When, After } = require('cucumber');



Given('I visit the site', async function() {
    await this.openHomePage
    })

When('I click on start button', function (){

    });
Then('I should choose between {string}, {string} ou {string}', function (string, string2, string3) {
        return 'pending';
    });

Then('I should be able to play', function () {
    });

The ('see the results', function () {
    });     