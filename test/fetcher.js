var fetcher = require('../lib/fetcher')

describe('fetcher', function () {
  // Incomplete test, requires stubbing of request over multiple requests,
  // returning different results each time, to avoid an infinite loop.

  xit('fetches multiple pages', function (done) {
    fetcher({url: 'http://last.fm/'}, (e, response, body) => {
      // Assert the callback is called the correct number of times
      // Assert the 2nd URL fetched is the expected URL
    })
  })
})
