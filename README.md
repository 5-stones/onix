# ONIX

A strongly typed library for parsing ONIX feeds.

## Usage

At a high level, you can pass an XML string into the `parse` function which
will return an object of type `ONIXMessageRoot`.

```ts
import { parse } from '@5stones/onix';

const someONIXMessage = '...';
const parsed = parse(someONIXMessage);
```

There's also a function for parsing an ONIX feed file from an SFTP connection:

```ts
import { parseFeedOnSFTP } from '@5stones/onix';

const connectionOptions = {...};
const directory = '/';
const parsed = parseFeedOnSFTP(connectionOptions, directory);
```

There are also numerous interfaces, enums, and other data that can be used
for strong typing and parsing (e.g. BISAC data).

## Code Generation

If you need to update the BISAC codes/labels and/or the ONIX enums you can
use the two scraper scripts that scrape the relevant documentation websites
and generate the code:

```sh
yarn generate:bisac
yarn generate:onix-enums
```

## Release

The standard release command for this project is:
```
yarn version [--new-version <newversion> | major | minor | patch ]
```

This command will:

1. Generate/update the Changelog
1. Bump the package version
1. Tag & pushing the commit


e.g.

```
yarn version --new-version 1.2.17
yarn version patch // 1.2.17 -> 1.2.18
```
