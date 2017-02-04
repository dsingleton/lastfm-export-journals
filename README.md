# Last.fm journal exporter

Export the journal's of a Last.fm user.

## Usage
```sh
./bin/export [username] [destination]
```

For example `./bin/export underpangs journals` would export the journals for the user `underpangs` to the relative directory `journals`.

### Output

Output is one markdown file per journal entry, named by date + journal slug and storing metadata in [frontmatter](https://jekyllrb.com/docs/frontmatter/).

### Installation

Use [`yarn`](https://www.npmjs.com/package/yarn) over `npm` for installation, if you can.

## Last.fm Journals

Journal pages were removed in the [2014 redesign](https://en.wikipedia.org/wiki/Last.fm#End_of_radio_streaming_and_redesign_.282014.E2.80.93present.29), though they still exist at their old URLs (eg, [last.fm/user/{username}/journal](http://www.last.fm/user/underpangs/journal)).

The pages aren't accessible by navigation, user the older page layout, and aren't part of the API anymore. It's quite possibly they may disappear entirely in the future.

Grab 'em while you can.
