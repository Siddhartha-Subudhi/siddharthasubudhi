// Server-only: parse Medium RSS and return clean JSON
import Parser from "rss-parser";

const parser = new Parser({
  requestOptions: {
    headers: {
      "User-Agent": "Mozilla/5.0",
      Accept: "application/rss+xml, text/xml;q=0.9, */*;q=0.8",
    },
  },
});

export default async function handler(req, res) {
  try {
    const feed = await parser.parseURL("https://medium.com/feed/@siddhartha.subudhi");

    const items = (feed.items || []).map((item) => {
      // Try multiple fields for image
      const thumb1 = item.thumbnail || item.image || null;
      const encoded = item["content:encoded"] || item.content || "";
      const m = encoded.match(/<img[^>]+src="([^">]+)"/i);
      const firstImg = m ? m[1] : null;

      return {
        title: item.title || "",
        link: item.link || "",
        pubDate: item.pubDate || item.isoDate || "",
        thumbnail: thumb1 || firstImg,
        categories: item.categories || [], // <--- Add this line
      };
    });

    res.status(200).json({ items });
  } catch (err) {
    console.error("Medium API error:", err?.message || err);
    res.status(200).json({ items: [] }); // never crash the page
  }
}