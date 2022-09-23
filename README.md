# Random record generator

An Airtable extension that makes generating fake records for the purpose of demonstrating bases.

![image](https://user-images.githubusercontent.com/270536/190019329-b7c008df-ca32-4f25-85e8-1153966e8a26.png)

## Installation

This extension is not yet published in the Airtable Marketplace. To install it into a base:

- Open your base, click **Extensions**, then **Add an extension**
- Click the small plus sign (sometimes it says "Build a custom extension" next to it)
  <img width="106" alt="image" src="https://user-images.githubusercontent.com/270536/191860246-6acdbdf0-a2c1-4b27-8ba1-cb7ee74870e8.png">
- Give your extension a name.
- Follow the commands for setting up Airtable Blocks CLI if you haven't already installed it
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
