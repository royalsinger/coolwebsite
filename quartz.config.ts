import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Brotherly Forge",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Roboto Slab",
        body: "Roboto",
        code: "Roboto Mono",
      },
      colors: {
        lightMode: {
          // A neutral, slightly off-white background and deep, dark purple-gray for text
          light: "#fbfaff",
          lightgray: "#e6e1f0",
          gray: "#a8a2b5",
          darkgray: "#5e576d",
          dark: "#2f2a3a",
    
          // Purple is the primary accent color
          secondary: "#6a4c93",
          // A vibrant, cheerful yellow for highlights and call-to-actions
          tertiary: "#ffc93c",
          // A very subtle, transparent purple for backgrounds and hover states
          highlight: "rgba(106, 76, 147, 0.1)",
          // A semi-transparent yellow for marking text
          textHighlight: "#ffc93c66", // 66 at the end sets ~40% opacity
        },
        darkMode: {
          // A deep, dark purple-gray background and light, soft off-white for text
          light: "#1c1923",
          lightgray: "#3b364a",
          gray: "#7e788f",
          darkgray: "#c8c4d3",
          dark: "#f2f0f7",
    
          // A lighter, more vibrant purple for better contrast on a dark background
          secondary: "#a48cd3",
          // The same vibrant yellow, which pops beautifully in dark mode
          tertiary: "#ffc93c",
          // A subtle, transparent light purple for backgrounds and hover states
          highlight: "rgba(164, 140, 211, 0.1)",
          // A semi-transparent yellow for marking text
          textHighlight: "#ffc93c55", // 55 at the end sets ~33% opacity
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
