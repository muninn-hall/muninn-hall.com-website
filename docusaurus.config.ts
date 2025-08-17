// SPDX-FileCopyrightText: 2025 Catalan Lover
//
// SPDX-License-Identifier: MIT

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Muninn Hall',
  tagline: 'Meow',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://muninn-hall.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'muninn-hall', // Usually your GitHub org/user name.
  projectName: 'muninn-hall.com-website', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/muninn-hall/muninn-hall.com-website/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/muninn-hall/muninn-hall.com-website/tree/main/blog/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Muninn Hall',
      logo: {
        alt: 'Muninn Hall Logo',
        src: 'img/logo.png',
        srcDark:'img/logo_dark.png'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentationSidebar',
          position: 'left',
          label: 'Documentation',
        },
//        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/muninn-hall/muninn-hall.com-website/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
//            {
//              label: 'Fedi',
//              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
//            },
            {
              label: 'Matrix',
              href: 'https://matrix.to/#/muninn-hall-screening:feline.support',
            },
          ],
        },
        {
          title: 'More',
          items: [
//            {
//              label: 'Blog',
//              to: '/blog',
//            },
            {
              label: 'GitHub',
             href: 'https://github.com/muninn-hall/muninn-hall.com-website/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Muninn Hall`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};




export default config;
