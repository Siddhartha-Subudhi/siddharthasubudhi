// components/Blogs.js
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/medium");
        const data = await res.json();
        setBlogs(data.items || []);
      } catch (err) {
        console.error("Failed to load blogs", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <section id="blogs" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-sm uppercase tracking-widest text-brandTeal/90">
          Blogs
        </h3>
        <h2 className="mt-2 text-3xl font-bold">From my Medium</h2>

        {isLoading ? (
          <p className="mt-4 text-slate-300/90">Loading posts...</p>
        ) : blogs.length === 0 ? (
          <p className="mt-4 text-slate-300/90">No posts found.</p>
        ) : (
          <ul className="card-grid mt-6">
            {blogs.map((post) => (
              <li key={post.guid || post.link} className="card">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="card__background"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(14,165,163,0.22), rgba(251,191,36,0.22)), url(${post.thumbnail})`,
                    }}
                  />
                  <div className="card__content">
                    <div className="card__category">Read Blog</div>
                    <h4 className="card__heading">{post.title}</h4>
                    {/* New Code Block for Tags */}
                    {post.categories && post.categories.length > 0 && (
                      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
                        {post.categories.map((tag, tagIndex) => (
                          <li
                            key={tagIndex}
                            style={{
                              padding: '2px 8px',
                              borderRadius: 9999, // full rounded corners
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              fontSize: '.7rem',
                              color: 'rgba(255, 255, 255, 0.6)',
                            }}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div style={{ color: "rgba(255,255,255,0.8)", marginTop: 6, fontSize: ".9rem" }}>
                      Published on {new Date(post.pubDate).toDateString()}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}