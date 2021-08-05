beforeAll(async () => {
  await page.goto('https://twitter.com/login')
})

it('twitterのログイン画面が表示されること', async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const innerHtml = await page.$eval('h1', (el) => el.innerHTML)
  expect(innerHtml).toContain('Log in to Twitter')

  await page.screenshot({ path: 'screenshots/twitter.png' })
})
