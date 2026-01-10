// Helper function for SEO metadata
export interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export const generateSEO = ({
  title = "Govira Technologies",
  description = "Digital solutions company delivering websites, apps, branding, and digital campaigns.",
  url = "https://www.govira.com",
  image
}: SEOProps) => {
  return {
    title,
    description,
    url,
    image: image || "/og-image.png",
  };
};
