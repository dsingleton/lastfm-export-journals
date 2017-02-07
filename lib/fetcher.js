const request = require('request')
const cheerio = require('cheerio')
const url = require('url')

const fetcher = (requestOptions, callback) => {
  const fetcherCallback = (error, response, body) => {
    if (!error) {
      const $ = cheerio.load(body)
      let next = $('[rel="next"]').first().attr('href')
      if (next) {
        // @todo: resolve prototcol and host
        next = url.resolve('https://www.last.fm', next)
        request.get(next, fetcherCallback)
      }
    }
    callback(error, response, body)
  }
  request.get(requestOptions, fetcherCallback)
}

module.exports = fetcher
