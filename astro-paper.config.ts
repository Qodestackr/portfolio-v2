import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://wilson-gichuhi.pages.dev/",
    title: "Wilson Gichuhi",
    description: "Systems and Reliability Engineer. I build production systems that bring AI, integrations, and infrastructure into business workflows.",
    author: "Wilson Gichuhi",
    profile: "https://github.com/Qodestackr",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Africa/Nairobi",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/Qodestackr" },
    { name: "linkedin", url: "https://linkedin.com/in/wilson-gichuhi" },
    { name: "mail",     url: "mailto:winchygichu@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});