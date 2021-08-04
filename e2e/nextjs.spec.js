beforeAll(async () => {
  await page.goto('http://localhost:3000')
})

it('next.jsの初期ページが表示されること', async () => {
  await page.screenshot({ path: 'screenshots/nextjs.png' })

  const element = await page.$eval('h1', (el) => el.innerHTML)
  expect(element).toContain('Welcome to')
  expect(element).toContain('Next.js!')
})
