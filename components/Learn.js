import { motion } from "framer-motion";

export default function Learn() {
  const learn = [
    {
      title: "Databricks Interview Guide",
      desc: "Compact playbook of concepts, pitfalls, and patterns.",
      link: "/pdfs/Databricks_Interview_Guide.pdf",
      img: "/images/resource-1.jpg",
    },
    {
      title: "PySpark Coding Drills",
      desc: "Runnable snippets and patterns.",
      link: "/pdfs/PySpark_Coding_Drills.pdf",
      img: "/images/resource-2.jpg",
    },
    {
      title: "CDC + Contracts Starter Kit",
      desc: "Schema registry & contract tests.",
      link: "/pdfs/CDC_Contracts_Kit.pdf",
      img: "/images/resource-3.jpg",
    },
  ];

  return (
    <section id="learn" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-sm uppercase tracking-widest text-brandTeal/90">Learn</h3>
        <h2 className="mt-2 text-3xl font-bold">Learning Hub</h2>
        <p className="mt-3 max-w-2xl text-slate-300/90">
          Free guides now. Courses & mentorship coming soon.
        </p>

        <ul className="card-grid mt-6">
          {learn.map((r, i) => (
            <li key={i} className="card">
              <a href={r.link} target="_blank" rel="noreferrer">
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="card__background"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(14,165,163,0.22), rgba(251,191,36,0.22)), url(${r.img})`,
                  }}
                />
                <div className="card__content">
                  <div className="card__category">Download</div>
                  <h4 className="card__heading">{r.title}</h4>
                  <div style={{ color: "rgba(255,255,255,0.8)", marginTop: 6, fontSize: ".9rem" }}>
                    {r.desc}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
