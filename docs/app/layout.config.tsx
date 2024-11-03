import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { ImGithub } from 'react-icons/im'

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Nexium',
  },
  links: [
    {
      text: 'Docs',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'Github',
      url: 'https://github.com/thutasann/nexium',
      on: 'all',
      icon: <ImGithub />,
      type: 'icon',
    },
  ],
}
