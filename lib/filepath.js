const path = require('path')
const slug = require('slug')

const filename = journal => {
  return [
    journal.date.toISOString().split('T')[0],
    slug(journal.title, { lower: true })
  ].join('-')
}

const filepath = (dest, journal) => {
  return path.format({
    dir: dest,
    name: filename(journal),
    ext: '.md'
  })
}

module.exports = filepath
