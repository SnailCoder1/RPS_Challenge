const {setWorldConstructor } = require('cucumber')
const { expect} = require('chai')
const puppetter = require('puppeteer')

const HOME_PAGE = 'http://localhost:3000'

class RpsGame{
    constructor() {}
    
    async openHomePage() {
        this.browser = await puppeteer.launch({headless: false, slowmo: 100})
        this.page = await this.browser.newPage()
        await this.page.goto(HOME_PAGE)
    }
    
    async closeHomePage() {
        await this.browser.close()
    }

    async pageHasTextContent(expectedContent) {
        const pageContent = await this.page.content()
        const actualContent = pageContent.match(expectedContent)[0]
    
        expect(actualContent).to.be.eq(expectedContent)
    }
}

 






setWorldConstructor(RpsGame)