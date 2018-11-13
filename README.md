# Markdown Generator for Instagram
> Make your .md file for Instagram media.

You can post Instagram media to your jekyll blog. 

![](example.png)

## Installation

```sh
npm install
```

## Usage example

1. You must enter a configuration file.
```json
{
    "forcedDraw": true,
    "mediaList": [
        {
            "categories": "workout",
            "tags": "kendo",
            "fileName": "`workout-log-${tags}.md`",
            "title": "`${date} Workout Log: ${tags}`",
            "media": "Bp1rBsAhN1b"
        },
        {
            "categories": "workout",
            "tags": "kendo",
            "fileName": "`workout-log-${tags}.md`",
            "title": "`${date} Workout Log: ${tags}`",
            "media": "BpzNKnZhUAE"
        },
        {
            "categories": "workout",
            "tags": "kendo",
            "fileName": "`workout-log-${tags}.md`",
            "title": "`${date} Workout Log: ${tags}`",
            "media": "BptFy0hh2gI"
        }
    ]
}
```
You can using template string(es6). (**date** is date string of 'YYYY-MM-DD' format)
  * categories: Categories of front matter of markdown file.
  * tags: Tags of front matter of markdown file.
  * fileName: Generated file name has **date** prefix. (i.e. `${date}-${config.mediaList.fileName}`)
  * title: Title of front matter of markdown file.
  * media: Instagram photo shortcode. You can get this through [here](https://elfsight.com/blog/2015/10/how-to-get-instagram-photo-shortcode/).
  * forcedDraw: The instagram embed has bug that not loading. So, _forcedDraw: true_ means that it is forced to load. But it can be a little low performance in a blog or something. Recommend that you set it to true when using the Jekyll blog now.

2. Running generator
```sh
node generator
```

3. You can getting markdown files from "/posts" folder.

## Release History

* 0.1.0
    * The first proper release

## Meta

Heekyum Kim – shlrur123@gmail.com

Distributed under the MIT license.

[https://github.com/shlrur/](https://github.com/shlrur/)

## Contributing

1. Fork the repo on GitHub
2. Clone the project to your own machine
3. Commit changes to your own branch
4. Push your work back up to your fork
5. Submit a Pull request so that we can review your changes

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki