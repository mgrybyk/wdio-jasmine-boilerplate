describe('Landing Page', () => {
    beforeAll(() => {
        browser.url('/')
    })

    it('should have proper title', () => {
        expect(browser).toHaveTitle('WebdriverIO', { containing: true })
    })
})
