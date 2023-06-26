import type { MainNavItem } from "@/types"

import { productCategories } from "@/config/products"
import { slugify } from "@/lib/utils"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Skateshop13",
  description:
    "An open source e-commerce skateshop build with everything new in Next.js 13.",
  url: "https://skateshop13.vercel.app/",
  ogImage: "https://skateshop13.vercel.app/opengraph-image.png",
  mainNav: [
    {
      title: "Why No Name?",
      href: "/",
    },
    {
      title: "Frequently Asked Questions",
      href: "/",
    },
    {
      title: "Contact Us",
      href: "/",
    },
  ] satisfies MainNavItem[],
  links: {
    twitter: "https://twitter.com/sadmann17",
    github: "https://github.com/sadmann7/skateshop",
  },
}
