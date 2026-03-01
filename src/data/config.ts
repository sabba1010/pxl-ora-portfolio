const config = {
  title: "Pixelora Studio | Creative Agency",
  description: {
    long: "Pixelora Studio is a premier creative agency specializing in high-end digital solutions. We provide expert services in WordPress development, Shopify e-commerce, custom web development, and professional graphic design. Our team is dedicated to delivering results that elevate your brand and drive growth through innovation and excellence.",
    short:
      "Pixelora Studio: Your partner for WordPress, Shopify, Custom Web Development, and Graphic Design.",
  },
  keywords: [
    "Pixelora Studio",
    "Creative Agency",
    "WordPress Development",
    "Shopify Expert",
    "Custom Web Development",
    "Graphic Design Services",
    "Agency in Bangladesh",
    "Modern Web Design",
    "Interactive Portfolio",
    "Digital Transformation",
  ],
  author: "Pixelora Studio",
  email: "pixelorastudio@gmail.com",
  site: "https://pixelorastudio.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/PixeloraStudio",
    linkedin: "https://www.linkedin.com/company/pixelorastudio/",
    instagram: "https://www.instagram.com/pixelorastudio/",
    facebook: "https://www.facebook.com/PixeloraOfficial/",
  },
};
export { config };
