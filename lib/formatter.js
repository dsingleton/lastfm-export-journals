
const formatter = journal => {
  return [
    '---',
    `title: ${journal.title}
url: ${journal.url}
date: ${journal.date.toISOString()}`,
    '---',
    journal.body
  ].join('\n')
}

module.exports = formatter
