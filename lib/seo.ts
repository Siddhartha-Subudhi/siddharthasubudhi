// lib/seo.ts
export const defaultSEO = {
  title: "Siddhartha Subudhi | Data Engineer",
  description:
    "Portfolio of Siddhartha Subudhi, Data Engineer specializing in Azure Data Factory, Databricks, PySpark, SQL, and large-scale data platforms.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siddhartha-subudhi.github.io",
    site_name: "Siddhartha Subudhi | Data Engineer",
    images: [
      {
        url: "/og-default.png", // place a 1200x630 image in public/
        width: 1200,
        height: 630,
        alt: "Siddhartha Subudhi - Data Engineer",
      },
    ],
  },
};
