import {
  Mastodon,
  Twitter,
  Line,
  Reddit,
  Hatenabookmark
} from '@icons-pack/react-simple-icons';
import { Mail } from 'react-feather';

const items = [
  {
    name: 'Mail',
    icon: Mail,
    link: 'mailto:?body={text}%20{link}'
  },
  {
    name: 'Hatena',
    icon: Hatenabookmark,
    color: '#00A4DE',
    link: 'https://b.hatena.ne.jp/entry/panel/?url={link}&btitle={text}'
  },
  {
    name: 'LINE',
    icon: Line,
    color: '#00C300',
    link: 'https://line.me/R/msg/text/?{text}%20{link}'
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
      'best-friends.chat',
      'fedibird.com',
      'tooting.ai'
    ]
  },
  {
    name: 'Misskey',
    prompt: 'domain',
    link: 'https://{domain}/share?text={text}%20{link}',
    suggestions: ['misskey.io', 'co.misskey.io']
  },
  {
    name: 'Reddit',
    icon: Reddit,
    color: '#FF4500',
    link: 'https://www.reddit.com/submit?url={link}&title={text}'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    color: '#1DA1F2',
    link: 'https://twitter.com/intent/tweet?text={text}&url={link}'
  }
];

export default items;
