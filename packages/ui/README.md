# @packages/ui

Shared UI component library for the web monorepo.

## Installation

```bash
pnpm add @packages/ui@workspace:*
```

## Usage

```tsx
import { Button } from '@packages/ui';

export default function MyComponent() {
  return <Button>Click me</Button>;
}
```

## Components

- `Button`: Basic button component with variants
- `Input`: Text input component
- `Card`: Container component
- More components documented in their respective stories

## Development

```bash
# Run Storybook
pnpm dev

# Run tests
pnpm test

# Build package
pnpm build
```

## Contributing

1. Components should be built using React and styled with Tailwind CSS
2. Each component should have:
   - TypeScript types
   - Unit tests
   - Storybook stories
   - Documentation
3. Follow the project's coding standards 