beforeAll(async () => {
  await page.goto('https://twitter.com/login')
})

it('twitterのログイン画面が表示されること', async () => {
  await page.screenshot({ path: 'screenshots/twitter.png' })

  const element = await page.$eval('h1', (el) => el.innerHTML)
  expect(element).toContain('Log in to Twitter<')
})
