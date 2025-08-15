export default function Card({ children, className = "" }){ return (<div className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 ${className}`}>{children}</div>); }
