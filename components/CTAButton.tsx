import Link from "next/link";

export default function CTAButton({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 
                 text-white rounded-lg shadow-md hover:shadow-lg transition-transform 
                 hover:-translate-y-0.5"
    >
      {text}
    </Link>
  );
}
