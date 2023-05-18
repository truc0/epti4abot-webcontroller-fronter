import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EPTI4ABOT",
  description: "An easy-to-build solution to cars with navigation and lidar obstacle avoidance",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/radar.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Web Controller', link: 'https://navbot.app/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is EPTI4ABOT?', link: '/introduction' },
          { text: 'Deploy', link: '/deploy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/truc0/epti4abot-webcontroller-fronter' }
    ]
  }
})
