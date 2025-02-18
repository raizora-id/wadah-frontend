import type { NextConfig } from 'next'

interface CustomConfig extends NextConfig {
  // Add your custom config types here
}

const defaultConfig: NextConfig = {
  output: 'standalone',
  compiler: {
    // Only apply these in production
    ...(process.env.NODE_ENV === 'production' && {
      removeConsole: {
        exclude: ['error'],
      },
      reactRemoveProperties: { properties: ['^data-testid$'] }
    })
  },
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com'
        },
        {
            protocol: 'https',
            hostname: 'images.unsplash.com'
        },
        {
            protocol: 'https',
            hostname: 'ui.shadcn.com'
        }
    ]
    },
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js'
                }
            }
        }
    }
}

function createConfig(customConfig: Partial<CustomConfig> = {}): NextConfig {
  return {
    ...defaultConfig,
    ...customConfig,
    // Merge compiler options if they exist in customConfig
    compiler: {
      ...defaultConfig.compiler,
      ...(customConfig.compiler || {})
    }
  }
}

export default createConfig