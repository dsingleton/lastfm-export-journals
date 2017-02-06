var assert = require('assert')
var parser = require('../lib/parser')

describe('parser', function () {
  let input = `
    <div data-gmiclass="JournalStream" class="journal-module journal-stream  all-long" gmindex="2"><div class="deviation-plain-view">
      <div class="deviation-plain-view">
            <script type="text/javascript">DWait.ready([".domready","jms/pages/deviation/litty.js"], function(){ setTimeout(Litty.initty, 1) });</script>
<div class="journal-wrapper tt-a" data-gmiclass="DuperbrowseFreeformCustomStream" data-sigil="journal-wrapper">
        <div class="journal-wrapper2">
        <div id="dev12345" class="journal journal-green journalcontrol"><div id="devskin0"><div class="negate-box-margin" style=""><div usr="" class="gr-box gr-genericbox"><i usr="" class="gr1"><i></i></i><i usr="" class="gr2"><i></i></i><i usr="" class="gr3"><i></i></i><div usr="" class="gr-top">
            <i usr="" class="tri"></i>
            <div usr="" class="gr">
                <div class="metadata">
                <h2>
                        <a href="http://user.deviantart.com/journal/permalink-1">
            Journal title 1            </a>
        </h2>                <p class="mavatar">
                    <a target="_self" href="http://user.deviantart.com/"><img class="avatar" src="http://a.deviantart.net/avatars/k/e/user.png" alt=":iconuser:" title="user"></a>                </p>
                <ul>
                    <li class="author">
                        by <span class="name"><span class="username-with-symbol u"><a class="u regular username" href="http://user.deviantart.com/">user</a><span class="user-symbol regular" data-quicktip-text="" data-show-tooltip="" data-gruser-type="regular"></span></span></span>,
                        <span title="68 weeks and 2 days ago">Mon 14 Jul, 2008, 11:46 AM</span>
                    </li>
                    <li class="category">
                        <span><a href="http://www.deviantart.com/journals/"><span>Journals</span></a></span> / <span><a href="http://www.deviantart.com/journals/personal/"><span>Personal</span></a></span>                    </li>
                </ul>
            </div>
                </div>
    </div><div usr="" class="gr-body"><div usr="" class="gr">
            <div class="grf-indent">
                        <div class="text">
                Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.        <script type="text/javascript">
            if (!window.__meta_cache) {
                window.__meta_cache = [];
            }
            window.__meta_cache['daml12345']=[]        </script>
                    </div>
                        <div usr="" class="c ppb alink bottom">
                <a usr="" class="a commentslink" href="http://user.deviantart.com/journal/permalink-1#comments">2 Comments</a>
            </div>        </div>
        <script type="text/javascript" id="dwaitdatex-58979896c66f9">
(function(){
    function dwaitdatex_58979896c66f9(DWait) {
        var DWaitReady = false
        ,context = this
        ,cb = function() {
            DWaitReady = true;
            var elem = document.getElementById('dwaitdatex-58979896c66f9');
            context = elem ? elem.parentNode : context;
            (function(){ PubSub.publish('DuperbrowseStreamLoader.load', {stream: 'freeform.custom'}); }).apply(context);
        };
        DWait.ready(["jms/pages/duperbrowse/loader/stream.loader.js"], cb);
    }

    function load() {
        if (window.DWait) {
            dwaitdatex_58979896c66f9(DWait);
        } else {
            setTimeout(load, 100);
        }
    }

    load();
})();
</script>        </div></div>
        <i usr="" class="gr3 gb"></i>
        <i usr="" class="gr2 gb"></i>
        <i usr="" class="gr1 gb gb1"></i>    </div>
    </div></div></div>
                <div class="journal-footer">
            <a data-deviationid="12345" href="http://user.deviantart.com/journal/permalink-1" class="more">Journal title 1</a>
            <span class="date">June 12, 2005</span>
            <a href="http://user.deviantart.com/journal/permalink-1#comments" class="comments"><em></em>2 Comments</a>
            <a href="http://user.deviantart.com/journal/permalink-1" class="faves"><em></em>No Favourites</a>
        </div></div></div>        </div>
  </div>
  `

  it('should return an empty array if no journals', function () {
    let input = ''
    assert.equal(parser(input).length, 0)
  })

  // it('should allow custom body formatter', function () {
  //   const body = "I do &lt;3 machine tags. If tag are web 2.0 <em>glue</em> (urghh), then they're most definitely <strong>super glue</strong>.<br><br>There are just under 100,000 photos on Flickr that are tagged with Last.fm event machine-tags. This is great because users can just tag their flickr photos rather than having to upload gig photos to us too. I'd rather we stuck to what we're good at, music.<br><br>As of today <span>Flickr</span> now link back to our event pages, hurrah!".toUpperCase()
  //   const bodyFormatter = body => body.toUpperCase()
  //
  //   assert.equal(parser(input, bodyFormatter)[0].body, body)
  // })

  it('should parse a list of journals', function () {
    const expected = {
      title: 'Journal title 1',
      url: 'http://user.deviantart.com/journal/permalink-1',
      // Duplicate date parsing to avoid timezone issues in CI env
      date: new Date('Mon 14 Jul, 2008, 11:46 AM'),
      body: `Lorem ipsum dolor sit amet,  \nconsectetur adipiscing elit.`
    }

    assert.deepEqual(parser(input), [expected])
  })

  it('should parse a list of journals with the weird format', function () {
    let input = `<div data-gmiclass="JournalStream" class="journal-module journal-stream  all-long" gmindex="2"><div class="journal-wrapper tt-a" data-gmiclass="DuperbrowseFreeformCustomStream" data-sigil="journal-wrapper">
        <div class="journal-wrapper2">
        <div id="dev12345" class="journal withskin journalcontrol"><div id="devskin5699541"><div class="negate-box-margin" style=""><div usr="" class="gr-box gr-genericbox"><i usr="" class="gr1"><i></i></i><i usr="" class="gr2"><i></i></i><i usr="" class="gr3"><i></i></i><div usr="" class="gr-top">
            <i usr="" class="tri"></i>
            <div usr="" class="gr">
                <h2>
                            <img src="http://st.deviantart.net/minish/gruzecontrol/icons/journal.gif?2" style="vertical-align:middle" alt="">
                        <a href="http://user.deviantart.com/journal/permalink-2">
            Journal title 2            </a>
        </h2>            <span usr="" class="timestamp" title="638w 2d ago">Mon 14 Jul, 2008, 11:46 AM</span>
                    </div>
    </div><div usr="" class="gr-body"><div usr="" class="gr">
            <div class="grf-indent">
                        <div class="text">
                Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.<script type="text/javascript">
            if (!window.__meta_cache) {
                window.__meta_cache = [];
            }
            window.__meta_cache['daml12345']=[]        </script>
                    </div>
                        <div usr="" class="c ppb alink bottom">
                <a usr="" class="a commentslink" href="http://user.deviantart.com/journal/permalink-2#comments">3 Comments</a>
            </div>        </div>
        <script type="text/javascript" id="dwaitdatex-5898d1a5afcae">
(function(){
    function dwaitdatex_5898d1a5afcae(DWait) {
        var DWaitReady = false
        ,context = this
        ,cb = function() {
            DWaitReady = true;
            var elem = document.getElementById('dwaitdatex-5898d1a5afcae');
            context = elem ? elem.parentNode : context;
            (function(){ PubSub.publish('DuperbrowseStreamLoader.load', {stream: 'freeform.custom'}); }).apply(context);
        };
        DWait.ready(["jms/pages/duperbrowse/loader/stream.loader.js"], cb);
    }

    function load() {
        if (window.DWait) {
            dwaitdatex_5898d1a5afcae(DWait);
        } else {
            setTimeout(load, 100);
        }
    }

    load();
})();
</script>        </div></div>
        <i usr="" class="gr3 gb"></i>
        <i usr="" class="gr2 gb"></i>
        <i usr="" class="gr1 gb gb1"></i>    </div>
    </div></div></div>
                <div class="journal-footer">
            <a data-deviationid="12345" href="http://user.deviantart.com/journal/permalink-2" class="more">Journal title 2</a>
            <span class="date">November 12, 2004</span>
            <a href="http://user.deviantart.com/journal/permalink-2#comments" class="comments"><em></em>3 Comments</a>
            <a href="http://user.deviantart.com/journal/permalink-2" class="faves"><em></em>No Favourites</a>
        </div></div></div>`

    const expected = {
      title: 'Journal title 2',
      url: 'http://user.deviantart.com/journal/permalink-2',
      date: new Date('Mon 14 Jul, 2008, 11:46 AM'),
      body: `Lorem ipsum dolor sit amet,  \nconsectetur adipiscing elit.`
    }
    assert.deepEqual(parser(input), [expected])
  })
})
