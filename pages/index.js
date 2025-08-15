import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";
import { Mail, CalendarCheck2, BookOpen, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export async function getStaticProps() {
  // Try to fetch Medium via serverless API; during dev this may fail (fallback to empty array)
  let posts = [];
  try {
    const res = await fetch('http://localhost:3000/api/medium');
    if(res.ok) posts = await res.json().then(r=>r.items).catch(()=>[]);
  } catch(e){ posts = []; }
  return { props: { posts }, revalidate: 3600 };
}

export default function Home({ posts=[] }){
  const [status, setStatus] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = { name: e.target.name.value, email: e.target.email.value, message: e.target.message.value };
    const r = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) });
    if(r.ok) { setStatus('sent'); e.target.reset(); } else { setStatus('error'); }
  };

  return (
    <>
      <Head>
        <title>Siddhartha Subudhi — Data Engineer & Mentor</title>
        <meta name="description" content="Siddhartha Subudhi — Data Engineer. Azure, Databricks, PySpark, Lakehouse Architect. Hire or Learn." />
      </Head>
      <Header />
      <main>
        <section id="hero" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brandTeal/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brandGold/20 blur-3xl" />
          </div>
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 relative">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">Data Engineer • Mentor • Problem Solver</p>
              <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">I build <span className="text-amber-300">scalable</span> data systems — and teach you how to do it.</h1>
              <p className="mt-4 max-w-xl text-slate-300/90">Azure + Databricks + Delta. Batch & Streaming. Cost, latency, reliability — engineered as KPIs. Available for consulting and 1:1 mentorship.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact"><Button>Hire Me <CalendarCheck2 size={16}/></Button></a>
                <a href="#learn"><Button variant="ghost">Start Learning <BookOpen size={16}/></Button></a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer"><Button variant="subtle">Resume</Button></a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-slate-300/80">
                <a className="hover:text-white" href="https://linkedin.com/in/siddhartha-subudhi" target="_blank" rel="noreferrer"><Linkedin size={20}/></a>
                <a className="hover:text-white" href="https://github.com/siddhartha-subudhi" target="_blank" rel="noreferrer"><Github size={20}/></a>
              </div>
            </div>
            <div className="md:justify-self-end">
              <Card className="relative overflow-hidden">
                <div className="absolute -top-12 -right-10 h-40 w-40 rounded-full bg-amber-300/20 blur-2xl" />
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-brandTeal to-brandGold text-slate-900 font-bold">S</div>
                  <div><p className="text-slate-300/80">Featured</p><h3 className="font-semibold">Lakehouse on Azure</h3></div>
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-slate-200/90">
                  <li>Unity Catalog, Governance, Lineage</li>
                  <li>Medallion (Bronze/Silver/Gold)</li>
                  <li>Cost & Latency SLOs for execs</li>
                </ul>
              </Card>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Card><div className="flex items-center gap-2">PySpark CI/CD</div></Card>
                <Card><div className="flex items-center gap-2">Power BI + Synapse</div></Card>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-sm uppercase tracking-widest text-brandTeal/90">Services</h3>
            <h2 className="mt-2 text-3xl font-bold">Hire me to move the KPIs</h2>
            <p className="mt-3 max-w-2xl text-slate-300/90">I architect, optimize, and mentor—so your data actually delivers.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card><h3 className="text-xl font-semibold text-amber-300">Data Engineering Consulting</h3><p className="mt-2 text-slate-300/90">Databricks, ADF, Synapse, Delta Lake.</p><div className="mt-4"><a href="#contact"><Button>Book a Discovery Call</Button></a></div></Card>
              <Card><h3 className="text-xl font-semibold text-amber-300">ETL Optimization & Cost Savings</h3><p className="mt-2 text-slate-300/90">Cut compute by up to 40% while speeding up jobs.</p><div className="mt-4"><a href="#contact"><Button>Request an Audit</Button></a></div></Card>
              <Card><h3 className="text-xl font-semibold text-amber-300">Analytics & Dashboards</h3><p className="mt-2 text-slate-300/90">Synapse serverless + Power BI semantic models.</p><div className="mt-4"><a href="#contact"><Button>Discuss Your Use Case</Button></a></div></Card>
              <Card><h3 className="text-xl font-semibold text-amber-300">1:1 Mentorship</h3><p className="mt-2 text-slate-300/90">Personalized coaching for interviews and system design.</p><div className="mt-4"><a href="#contact"><Button>Apply for Mentorship</Button></a></div></Card>
            </div>
          </div>
        </section>

        <section id="work" className="py-16 md:py-24 bg-white/5">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-sm uppercase tracking-widest text-brandTeal/90">Case Studies</h3>
            <h2 className="mt-2 text-3xl font-bold">Impact you can screenshot</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card><h3 className="text-lg font-semibold">Cost-Optimized Lakehouse (1TB/day)</h3><p className="mt-2 text-slate-300/90">Reduced Databricks cost by 42% and improved runtime by 3×.</p></Card>
              <Card><h3 className="text-lg font-semibold">Real-Time KYC Events Platform</h3><p className="mt-2 text-slate-300/90">Debezium→Kafka→Delta delivering &lt;60s end-to-end latency.</p></Card>
            </div>
          </div>
        </section>

        <section id="learn" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-sm uppercase tracking-widest text-brandTeal/90">Learn</h3>
            <h2 className="mt-2 text-3xl font-bold">Learning Hub</h2>
            <p className="mt-3 max-w-2xl text-slate-300/90">Free guides now. Courses & mentorship coming soon.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <Card><h4 className="font-semibold">Databricks Interview Guide</h4><p className="mt-2 text-slate-300/90">Compact playbook of concepts, pitfalls, and patterns.</p><div className="mt-4"><a href="/pdfs/Databricks_Interview_Guide.pdf" target="_blank"><Button variant="ghost">Download PDF</Button></a></div></Card>
              <Card><h4 className="font-semibold">PySpark Coding Drills</h4><p className="mt-2 text-slate-300/90">Runnable snippets and patterns.</p><div className="mt-4"><a href="/pdfs/PySpark_Coding_Drills.pdf" target="_blank"><Button variant="ghost">Download PDF</Button></a></div></Card>
              <Card><h4 className="font-semibold">CDC + Contracts Starter Kit</h4><p className="mt-2 text-slate-300/90">Schema registry & contract tests.</p><div className="mt-4"><a href="/pdfs/CDC_Contracts_Kit.pdf" target="_blank"><Button variant="ghost">Get the Kit</Button></a></div></Card>
            </div>
          </div>
        </section>

        <section id="blogs" className="py-16 md:py-24 bg-white/5">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-sm uppercase tracking-widest text-brandTeal/90">Blogs</h3>
            <h2 className="mt-2 text-3xl font-bold">From my Medium</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {posts && posts.length ? posts.map((p, i) => (
                <Card key={i}><a href={p.link} target="_blank" rel="noreferrer"><h4 className="font-semibold">{p.title}</h4><p className="mt-2 text-sm text-slate-300/80">{new Date(p.pubDate).toDateString()}</p></a></Card>
              )) : <p>No posts found.</p>}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24 bg-white/5">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-sm uppercase tracking-widest text-brandTeal/90">Praise</h3>
            <h2 className="mt-2 text-3xl font-bold">What clients & learners say</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <Card><p>“Sidd cut our ETL costs by 38% and reduced daily load time from 2h to 35m.”</p><p className="mt-3 text-sm text-slate-300/80">— Director of Data, Fintech</p></Card>
              <Card><p>“His mentorship turned my fragmented prep into an offer at a top product company.”</p></Card>
              <Card><p>“We went from ad-hoc jobs to a governed lakehouse with Unity Catalog in 3 weeks.”</p></Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="text-sm uppercase tracking-widest text-brandTeal/90">Contact</h3>
            <h2 className="mt-2 text-3xl font-bold">Let’s build something reliable (and fast)</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card>
                <form onSubmit={(e)=>{e.preventDefault(); const form={name:e.target.name.value,email:e.target.email.value,message:e.target.message.value}; fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)}).then(r=>{ if(r.ok){ alert('Message sent — I will reply within 24 hours.'); e.target.reset(); } else alert('Error sending message.'); }).catch(()=>alert('Network error')); }} id="contact-form">
                  <input name="name" required className="rounded-xl bg-white/10 px-4 py-2 w-full" placeholder="Your name" />
                  <input name="email" required className="rounded-xl bg-white/10 px-4 py-2 w-full mt-3" placeholder="Email" />
                  <textarea name="message" required className="rounded-xl bg-white/10 px-4 py-2 w-full mt-3" rows="6" placeholder="Project details or learning goals"></textarea>
                  <div className="mt-3"><Button type="submit">Send Message <Mail size={16}/></Button></div>
                </form>
              </Card>
              <Card>
                <h4 className="font-semibold">Prefer to schedule?</h4>
                <p className="mt-2 text-slate-300/90">Grab a 20‑min discovery slot that fits your calendar.</p>
                <div className="mt-4"><a href="#" className="inline-block"><Button><CalendarCheck2 size={16}/> Open Calendly</Button></a></div>
                <div className="mt-6 text-sm text-slate-300/80"><p>Email: siddhartha.subudhi@outlook.com</p><p>Location: Bengaluru, India</p></div>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
