import { cn } from '@packages/ui/lib/utils';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

export const fonts = cn(
  'touch-manipulation font-sans antialiased',
  GeistSans.variable,
  GeistMono.variable
);
