[![Build Status](https://github.com/fortnite-music/fortnitebgm-db/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/fortnite-music/fortnitebgm-db/actions/workflows/build.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

# fortnitebgm-db

Definitive Fortnite music database

## Description

This database is currently under construction
[Fortnite Music](https://fortnite-music.github.io/).

## Credits

This database is built off of the work from the MapleStory Music Database.
None of this work would be possible without them.
[MapleStory Music](https://maplestory-music.github.io/).

## Scope

The scope of this project is limited to [Fortnite](https://wikipedia.org/wiki/Fortnite),
originally published in 2017. It covers tracks from all available modes, and tracks that
are referenced in media related to Fortnite, but nothing from beyond the scope of
Fortnite as a project itself.

## Installation

Use Yarn to install development dependencies for this project.

## Development and Usage

The database is stored in `./bgm`, tests are specified in `bgm.test.js`, and
schema defined in `schema.json`. Changes to the database partitions should
pass the specified test cases and validate against the JSON schema.

Tests can be run through Jest.

```bash
yarn test
```

## Versioning

Releases are cut at the beginning of every quarter, following a `YYYY.Q`
format. The contents of a typical release will include new song additions
from the previous quarter, along with any modifications to the database
during that time.


## License

[MIT](LICENSE)
