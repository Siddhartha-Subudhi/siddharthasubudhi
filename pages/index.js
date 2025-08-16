// pages/index.js
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";
import Blogs from "../components/Blogs";
import Learn from "../components/Learn";

import { Mail, CalendarCheck2, BookOpen, Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Siddhartha Subudhi — Data Engineer & Mentor</title>
        <meta
          name="description"
          content="Siddhartha Subudhi — Data Engineer. Azure, Databricks, PySpark, Lakehouse Architect. Hire or Learn."
        />
      </Head>

      <Header />
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brandTeal/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brandGold/20 blur-3xl" />
          </div>
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 relative">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
                Data Engineer • Mentor • Problem Solver
              </p>
              <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
                I build <span className="text-amber-300">scalable</span> data
                systems — and teach you how to do it.
              </h1>
              <p className="mt-4 max-w-xl text-slate-300/90">
                Azure + Databricks + Delta. Batch & Streaming. Cost, latency,
                reliability — engineered as KPIs. Available for consulting and
                1:1 mentorship.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact">
                  <Button>
                    Hire Me <CalendarCheck2 size={16} />
                  </Button>
                </a>
                <a href="#learn">
                  <Button variant="ghost">
                    Start Learning <BookOpen size={16} />
                  </Button>
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  <Button variant="subtle">Resume</Button>
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-slate-300/80">
                <a
                  className="hover:text-white"
                  href="https://linkedin.com/in/siddhartha-subudhi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  className="hover:text-white"
                  href="https://github.com/siddhartha-subudhi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="py-16 md:py-24 bg-white/5">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h3 className="text-sm uppercase tracking-widest text-brandTeal/90">
              About Me
            </h3>
            <h2 className="mt-2 text-3xl font-bold">Who I Am</h2>
            <p className="mt-4 text-slate-300/90 leading-relaxed">
              I’m Siddhartha Subudhi, a Data Engineer with 20+ years of
              experience designing and scaling data platforms. My expertise lies
              in Databricks, Azure, PySpark, and modern ETL frameworks. Beyond
              engineering, I mentor aspiring professionals to crack top product
              company interviews.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-sm uppercase tracking-widest text-brandTeal/90">
              Skills
            </h3>
            <h2 className="mt-2 text-3xl font-bold">What I Work With</h2>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                 { name: "SQL", img: "./images/skills/10132-icon-service-SQL-Server.svg" },
  { name: "PySpark", img: "images/skills/python-logo-only.svg" },
  { name: "Python", img: "images/skills/python-logo-only.svg" },

  // Big Data & Cloud
  { name: "Azure Databricks", img: "images/skills/10787-icon-service-Azure-Databricks.svg" },
  { name: "ADF", img: "images/skills/10126-icon-service-Data-Factories.svg" },
  { name: "Delta Lake", img: "images/skills/10787-icon-service-Azure-Databricks.svg" }, // Often associated with Databricks
  { name: "Synapse", img: "images/skills/00606-icon-service-Azure-Synapse-Analytics.svg" },
  { name: "ADLS Gen2", img: "images/skills/10126-icon-service-Data-Factories.svg" }, // Azure Data Lake is an Azure service

  // Modeling & ETL
  { name: "Data Vault 2.0", img: "images/skills/10126-icon-service-Data-Factories.svg" }, // Using a generic Azure/Data Factory icon
  { name: "Star Schema", img: "images/skills/03332-icon-service-Power-BI-Embedded.svg" }, // Associated with BI/Data Warehousing
  { name: "Dataflows", img: "images/skills/03332-icon-service-Power-BI-Embedded.svg" },
  { name: "Databricks Notebooks", img: "images/skills/10787-icon-service-Azure-Databricks.svg" },

  // CI/CD & Versioning
  { name: "Azure DevOps", img: "images/skills/10126-icon-service-Data-Factories.svg" }, // Using a generic Azure icon
  { name: "Git", img: "/skills/git.png" },
  { name: "Bitbucket", img: "/skills/bitbucket.png" },

  // Monitoring & Ops
  { name: "Azure Monitor", img: "images/skills/10126-icon-service-Data-Factories.svg" }, // Using a generic Azure icon
  { name: "PowerShell", img: "/skills/powershell.png" },
  { name: "ServiceNow", img: "https://placehold.co/64x64/2a66c4/ffffff?text=SN" }, // Placeholder for a generic icon
  { name: "DataDog", img: "https://placehold.co/64x64/632596/ffffff?text=DD" }, // Placeholder for a generic icon

  // Visualization
  { name: "Power BI", img: "/skills/powerbi.png" },

  // Additional Skills from a previous list
  { name: "Microsoft Fabric", img: "images/skills/Fabric_256.svg" },
  { name: "Apache Airflow", img: "images/skills/Apache Airflow.svg" },
  { name: "Docker", img: "images/skills/Docker.svg" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-4 rounded-xl bg-white/10 hover:bg-white/20 transition"
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="h-12 w-12 object-contain"
                  />
                  <p className="mt-2 text-slate-200">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-sm uppercase tracking-widest text-brandTeal/90">
              Services
            </h3>
            <h2 className="mt-2 text-3xl font-bold">Hire me to move the KPIs</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card>
                <h3 className="text-xl font-semibold text-amber-300">
                  Data Engineering Consulting
                </h3>
                <p className="mt-2 text-slate-300/90">
                  Databricks, ADF, Synapse, Delta Lake.
                </p>
              </Card>
              <Card>
                <h3 className="text-xl font-semibold text-amber-300">
                  ETL Optimization & Cost Savings
                </h3>
                <p className="mt-2 text-slate-300/90">
                  Cut compute by up to 40% while speeding up jobs.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="py-16 md:py-24 bg-white/5">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-sm uppercase tracking-widest text-brandTeal/90">
              Case Studies
            </h3>
            <h2 className="mt-2 text-3xl font-bold">Impact you can screenshot</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card>
                <h3 className="text-lg font-semibold">
                  Cost-Optimized Lakehouse (1TB/day)
                </h3>
                <p className="mt-2 text-slate-300/90">
                  Reduced Databricks cost by 42% and improved runtime by 3×.
                </p>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold">
                  Real-Time KYC Events Platform
                </h3>
                <p className="mt-2 text-slate-300/90">
                  Debezium→Kafka→Delta delivering &lt;60s end-to-end latency.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Learn Section */}
        <Learn />

        {/* Blogs */}
        <Blogs />

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-24 bg-white/5">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-sm uppercase tracking-widest text-brandTeal/90">
              Praise
            </h3>
            <h2 className="mt-2 text-3xl font-bold">What clients & learners say</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <Card>
                <p>
                  “Sidd cut our ETL costs by 38% and reduced daily load time
                  from 2h to 35m.”
                </p>
              </Card>
              <Card>
                <p>
                  “His mentorship turned my fragmented prep into an offer at a
                  top product company.”
                </p>
              </Card>
              <Card>
                <p>
                  “We went from ad-hoc jobs to a governed lakehouse with Unity
                  Catalog in 3 weeks.”
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-sm uppercase tracking-widest text-brandTeal/90">
              Contact
            </h3>
            <h2 className="mt-2 text-3xl font-bold">
              Let’s build something reliable (and fast)
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = {
                      name: e.target.name.value,
                      email: e.target.email.value,
                      message: e.target.message.value,
                    };
                    fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(form),
                    }).then((r) => {
                      if (r.ok) {
                        alert("Message sent — I will reply within 24 hours.");
                        e.target.reset();
                      } else alert("Error sending message.");
                    });
                  }}
                >
                  <input
                    name="name"
                    required
                    className="rounded-xl bg-white/10 px-4 py-2 w-full"
                    placeholder="Your name"
                  />
                  <input
                    name="email"
                    required
                    className="rounded-xl bg-white/10 px-4 py-2 w-full mt-3"
                    placeholder="Email"
                  />
                  <textarea
                    name="message"
                    required
                    className="rounded-xl bg-white/10 px-4 py-2 w-full mt-3"
                    rows="6"
                    placeholder="Project details or learning goals"
                  />
                  <div className="mt-3">
                    <Button type="submit">
                      Send Message <Mail size={16} />
                    </Button>
                  </div>
                </form>
              </Card>
              <Card>
                <h4 className="font-semibold">Prefer to schedule?</h4>
                <p className="mt-2 text-slate-300/90">
                  Grab a 20-min discovery slot that fits your calendar.
                </p>
                <div className="mt-4">
                  <a href="#" className="inline-block">
                    <Button>
                      <CalendarCheck2 size={16} /> Open Calendly
                    </Button>
                  </a>
                </div>
                <div className="mt-6 text-sm text-slate-300/80">
                  <p>Email: siddhartha.subudhi@outlook.com</p>
                  <p>Location: Bengaluru, India</p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
