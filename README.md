[![Test](https://github.com/usdigitalresponse/airtable-extension-random-record-generator/actions/workflows/test.yml/badge.svg)](https://github.com/usdigitalresponse/airtable-extension-random-record-generator/actions/workflows/test.yml)

# Random record generator

An Airtable extension that makes generating fake records for the purpose of demonstrating bases.

![image](https://user-images.githubusercontent.com/270536/190019329-b7c008df-ca32-4f25-85e8-1153966e8a26.png)

## Installation

Add this extension [through the Airtable marketplace](https://airtable.com/marketplace/blkuZ6kbfEjCTxSNV/random-record-generator).

## Development

To start developing on this extension:

- Open your base, click **Extensions**, then **Add an extension**
- Click the small plus sign (sometimes it says "Build a custom extension" next to it)
  <img width="106" alt="image" src="https://user-images.githubusercontent.com/270536/191860246-6acdbdf0-a2c1-4b27-8ba1-cb7ee74870e8.png">
- Give your extension a name.
- Follow the commands for setting up Airtable Blocks CLI if you haven't already installed it. Click to the next step in Airtable.
- Copy the `block init` command, and change the `template` argument to this repo, so the command will look like:
  `block init app[something]/blk[something] --template=https://github.com/kevee/airtable-extension-random-record-generator app_name`
- Move to your directory and run `block release` to deploy the extension to your base.

## Field type support

Supports the following field types and random generators. Examples included:

- **Single line text**
  - Animal name, first: "Aaron"
  - Animal name, last: "Ant"
  - Animal name, full: "Aaron Ant"
  - Human name, first: "Aaron"
  - Human name, last: "Anderson"
  - Human name, full: "Aaron Anderson"
  - Lorem Ipsum, single sentence: "Lorem ipsum...."
  - Address: "123 Main St."
  - City: "New York"
  - State, abbreviation: "CA"
  - State, name: "California"
- **Multi-line text**
  - Lorem Ipsum, single sentence or multi-paragraph
- **Email**
  - Animal name email: "aant@gmail.fake-email.com"
  - Human name email: "aanderson@gmail.fake-email.com"
- **Checkbox**
  - Random check: Randomly checks the box
- **Number field**
  - Random integer or float: 45, 34.222
- **Date**
  - Random date: 2014-10-20
  - Random date and time: 2021-05-06T15:23:00
- **Attachments**
  - Random cat photo
  - A sample PDF file
- **Single and multi-select**
  - Random selection from the select options
- **Phone number**
  - Random phone number
- **Linked record**
  - Random single linked record
  - Random multiple linked records

## Code of Conduct

This repository falls under [U.S. Digital Response’s Code of Conduct](./CODE_OF_CONDUCT.md), and we will hold all participants in issues, pull requests, discussions, and other spaces related to this project to that Code of Conduct. Please see [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) for the full code.

## License & Copyright

Copyright (C) 2022 U.S. Digital Response (USDR)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this software except in compliance with the License. You may obtain a copy of the License at:

[`LICENSE`](./LICENSE) in this repository or http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
