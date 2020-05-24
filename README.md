![](https://i.imgur.com/9y5lIqY.png)

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/nzws/easy-share.now.sh/Node%20CI?style=for-the-badge)](https://github.com/nzws/easy-share.now.sh/actions)
[![GitHub](https://img.shields.io/github/license/nzws/easy-share.now.sh?style=for-the-badge)](#license)
[![code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge&logo=prettier)](https://prettier.io/)
[![dependabot enabled](https://img.shields.io/badge/dependabot-enabled-0366D6.svg?style=for-the-badge&logo=dependabot)](https://github.com/nzws/easy-share.now.sh/pulls?utf8=%E2%9C%93&q=is%3Apr+label%3Adependencies+)

> Generate super easily and various share link

## How to use

#### URL

```
GET https://easy-share.now.sh/?t=<text>&link=<link>
```

- The text and link must be URI encoded.

#### Embed (sample)

```html
<a id="easy-share-now-sh" target="_blank">Share my website</a>
<script>
  document.getElementById('easy-share-now-sh').href =
    'https://easy-share.now.sh/?t=' +
    encodeURIComponent(document.title) +
    '&link=' +
    encodeURIComponent(location.href);
</script>
```

## Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

✨Welcome✨

- Add sharing service (`components/share/items.js`)
  - It can be a local service in the country. (e.g. hatena bookmark is used in Japan.)
- Add / update translate (`locales/*.json`)
- Add new features, fix bugs, etc...

## License

- code: MIT
- GitHub icon of the cover image: [feather icons](https://github.com/feathericons/feather)
