describe('ImageDiff Landing Page Screenshots', function() {
  
  before(function(browser) {
    browser.windowMaximize();
  });

  after(function(browser) {
    browser.end();
  });

  it('Take screenshot of Home page', function(browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body', 5000)
      .pause(2000) // Wait for any animations
      .saveScreenshot('screenshots/home-page.png')
      .assert.titleContains('ImageDiff');
  });

  it('Take screenshot of Features page', function(browser) {
    browser
      .url(browser.launch_url + '/features')
      .waitForElementVisible('body', 5000)
      .waitForElementVisible('#root', 10000) // Wait for React to mount
      .pause(3000) // Wait for content to load
      .saveScreenshot('screenshots/features-page.png')
      .assert.visible('.features-grid');
  });

  it('Take screenshot of Demo page', function(browser) {
    browser
      .url(browser.launch_url + '/demo')
      .waitForElementVisible('body', 5000)
      .waitForElementVisible('#root', 10000) // Wait for React to mount
      .pause(3000) // Wait for content to load
      .saveScreenshot('screenshots/demo-page.png')
      .assert.visible('.demo-area');
  });

  it('Take screenshot of Pricing page', function(browser) {
    browser
      .url(browser.launch_url + '/pricing')
      .waitForElementVisible('body', 5000)
      .waitForElementVisible('#root', 10000) // Wait for React to mount
      .pause(3000) // Wait for content to load
      .saveScreenshot('screenshots/pricing-page.png')
      .assert.visible('.pricing-grid');
  });

});