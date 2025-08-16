// pages/api/blogs.js
import Parser from "rss-parser";

export default async function handler(req, res) {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(
      "https://medium.com/feed/@siddhartha.subudhi"
    );
    res.status(200).json(feed.items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Medium feed" });
  }
}
