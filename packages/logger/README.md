# @packages/logger

Logging utility package for the web monorepo.

## Installation

```bash
pnpm add @packages/logger@workspace:*
```

## Usage

```typescript
import { logger } from '@packages/logger';

logger.info('Application started');
logger.error('An error occurred', { error });
```

## Features

- Multiple log levels (debug, info, warn, error)
- Structured logging
- Environment-based configuration
- Error tracking integration
- Performance monitoring

## Development

```bash
# Run tests
pnpm test

# Build package
pnpm build
```

## Configuration

Configure logging levels in your `.env`:

```env
LOG_LEVEL=info
LOG_FORMAT=json
``` 