var assert = require('assert')
var formatter = require('../lib/formatter')

describe('formatter', function () {
  const journal = {
    title: 'Flickr machine tag cross-link.',
    url: '/user/underpangs/journal/2008/07/14/22hx6f_flickr_machine_tag_cross-link.',
    date: new Date('2008-07-14T21:46:00.000Z'),
    body: "I do <3 machine tags. If tag are web 2.0 _glue_ (urghh), then they're most definitely **super glue**.  \n\nThere are just under 100,000 photos on Flickr that are tagged with Last.fm event machine-tags. This is great because users can just tag their flickr photos rather than having to upload gig photos to us too. I'd rather we stuck to what we're good at, music.  \n\nAs of today Flickr now link back to our event pages, hurrah!"
  }

  it('format a journal', function () {
    let expected = `---
title: Flickr machine tag cross-link.
url: /user/underpangs/journal/2008/07/14/22hx6f_flickr_machine_tag_cross-link.
date: 2008-07-14T21:46:00.000Z
---
I do <3 machine tags. If tag are web 2.0 _glue_ (urghh), then they're most definitely **super glue**.  \n\nThere are just under 100,000 photos on Flickr that are tagged with Last.fm event machine-tags. This is great because users can just tag their flickr photos rather than having to upload gig photos to us too. I'd rather we stuck to what we're good at, music.  \n\nAs of today Flickr now link back to our event pages, hurrah!`
    assert.equal(formatter(journal), expected)
  })
})
