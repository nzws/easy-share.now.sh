import { Mastodon, Twitter, Line } from '@icons-pack/react-simple-icons';
import { Share, Mail } from 'react-feather';

const items = [
  {
    name: 'Device',
    if: !!(process.browser && window?.navigator?.share),
    icon: Share,
    onClick(text, url) {
      navigator.share({
        url,
        text
      });
    }
  },
  {
    name: 'Twitter',
    icon: Twitter,
    color: '#1DA1F2',
    link: 'https://twitter.com/intent/tweet?text={text}&url={link}'
  },
  {
    name: 'Mastodon',
    icon: Mastodon,
    color: '#3088D4',
    prompt: 'domain',
    link: 'https://{domain}/share?text={text}%20{link}',
    suggestions: [
      'mastodon.social',
      'mstdn.jp',
      'mastodon.cloud',
      'best-friends.chat'
    ]
  },
  {
    name: 'LINE',
    icon: Line,
    color: '#00C300',
    link: 'https://line.me/R/msg/text/?{text}%20{link}'
  },
  {
    name: 'Misskey',
    prompt: 'domain',
    link: 'https://{domain}/share?text={text}%20{link}',
    suggestions: ['misskey.io']
  },
  {
    name: 'Mail',
    icon: Mail,
    link: 'mailto:?body={text}%20{link}'
  }
];

export default items;
