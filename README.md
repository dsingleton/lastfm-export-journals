# Last.fm journal exporter ![](https://travis-ci.org/dsingleton/lastfm-export-journals.svg?branch=master) [![](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Export the journals for a Last.fm user, in structured markdown format.

## Usage

Install the package globally and it will add the `lastfm-export-journals` command.

```sh
npm install -g lastfm-export-journals
```

Call the command with the username to export and the directory to write output to:

```sh
lastfm-export-journals [username] [destination]
```

For example `lastfm-export-journals underpangs ~/journals` for the user `underpangs`, writing the output to `~/journals`.

### Output

Output is one markdown file per journal entry, named by date + journal slug and storing metadata in [frontmatter](https://jekyllrb.com/docs/frontmatter/).

## Contributing

Contribution is welcome! Clone the repo, install it's dependencies with [`yarn`](https://www.npmjs.com/package/yarn), create a feature branch, open a Pull Request again my version.

## Last.fm Journals

Journal pages were removed in the [2014 redesign](https://en.wikipedia.org/wiki/Last.fm#End_of_radio_streaming_and_redesign_.282014.E2.80.93present.29), though they still exist at their old URLs (eg, [last.fm/user/{username}/journal](http://www.last.fm/user/underpangs/journal)).

The pages aren't accessible by navigation, user the older page layout, and aren't part of the API anymore. It's quite possibly they may disappear entirely in the future.

Grab 'em while you can.
