var assert = require('assert')
var parser = require('../parser')

describe('parser', function () {
  let input = `
    <ul class="journals hfeed">
      <li class=" last  hentry">
        <h2><a href="/user/underpangs/journal/2008/07/14/22hx6f_flickr_machine_tag_cross-link." class="entry-title" rel="bookmark">Flickr machine tag cross-link.</a></h2>
        <p class="subhead">
          14 Jul 2008, 22:46
        </p>
        <div class="entry-content">
          <div class="bbcode">I do &lt;3 machine tags. If tag are web 2.0 <em>glue</em> (urghh), then they're most definitely <strong>super glue</strong>.<br><br>There are just under 100,000 photos on Flickr that are tagged with Last.fm event machine-tags. This is great because users can just tag their flickr photos rather than having to upload gig photos to us too. I'd rather we stuck to what we're good at, music.<br><br>As of today Flickr now link back to our event pages, hurrah!</div>
        </div>
        <div class="journalFooter">
          <span class="space"><a href="/user/underpangs/journal/2008/07/14/22hx6f_flickr_machine_tag_cross-link.">Read more</a></span>
          <span class="space"><span class="shoutCount">
          <a href="/user/underpangs/journal/2008/07/14/22hx6f_flickr_machine_tag_cross-link.#shoutbox" class="icon" data-analytics-action="ShoutCountLink">
          <img class="icon comment_icon" width="13" height="11" src="https://cdn.last.fm/flatness/clear.gif" style=""><span>4 comments</span>
          </a>
          </span></span>
          <span class="space"><a href="/user/underpangs/journal/2008/07/14/22hx6f_flickr_machine_tag_cross-link./#shoutbox" class="icon"><img class="icon comment_icon" width="13" height="11" src="https://cdn.last.fm/flatness/clear.gif" style=""><span>Add Comment</span></a></span>
        </div>
      </li>
    </ul>
  `

  it('should return an empty array if no journals', function () {
    let input = ''
    assert.equal(parser(input).length, 0)
  })

  it('should allow custom body formatter', function () {
    const body = "I do &lt;3 machine tags. If tag are web 2.0 <em>glue</em> (urghh), then they're most definitely <strong>super glue</strong>.<br><br>There are just under 100,000 photos on Flickr that are tagged with Last.fm event machine-tags. This is great because users can just tag their flickr photos rather than having to upload gig photos to us too. I'd rather we stuck to what we're good at, music.<br><br>As of today Flickr now link back to our event pages, hurrah!".toUpperCase()
    const bodyFormatter = body => body.toUpperCase()

    assert.equal(parser(input, bodyFormatter)[0].body, body)
  })

  it('should parse a list of journals', function () {
    const expected = {
      title: 'Flickr machine tag cross-link.',
      url: '/user/underpangs/journal/2008/07/14/22hx6f_flickr_machine_tag_cross-link.',
      // Duplicate date parsing to avoid timezone issues in CI env
      date: new Date('14 Jul 2008, 22:46'),
      body: "I do <3 machine tags. If tag are web 2.0 _glue_ (urghh), then they're most definitely **super glue**.  \n\nThere are just under 100,000 photos on Flickr that are tagged with Last.fm event machine-tags. This is great because users can just tag their flickr photos rather than having to upload gig photos to us too. I'd rather we stuck to what we're good at, music.  \n\nAs of today Flickr now link back to our event pages, hurrah!"
    }

    assert.deepEqual(parser(input), [expected])
  })
})
