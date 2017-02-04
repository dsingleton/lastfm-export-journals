const cheerio = require('cheerio')
const toMarkdown = require('to-markdown')

const parser = (bodyString, bodyFormatter = defaultBodyFormatter) => {
  const $ = cheerio.load(bodyString, { decodeEntities: false })

  return $('.hentry').toArray().map(journal => {
    journal = $(journal)

    return {
      title: journal.find('.entry-title').text(),
      url: journal.find('.entry-title').attr('href'),
      date: new Date(journal.find('.subhead').text()),
      body: bodyFormatter(journal.find('.entry-content .bbcode').html())
    }
  })
}

const markdownBodyFormatter = body => {
  return toMarkdown(body, {
    converters: [
      // Manually remove <span> tags, as toMarkdown doesn't, and they can appear
      // in the HTML generated by Last.fm's BBCode markup
      { filter: 'span', replacement: content => content }
    ]
  })
}
const defaultBodyFormatter = markdownBodyFormatter

module.exports = parser
