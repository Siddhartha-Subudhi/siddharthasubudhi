import Parser from 'rss-parser';
const parser = new Parser();

export default async function handler(req, res) {
  const feedUrl = 'https://medium.com/feed/@siddhartha.subudhi';
  try {
    const feed = await parser.parseURL(feedUrl);
    res.status(200).json({ items: feed.items.slice(0,6) });
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: 'failed' });
  }
}
