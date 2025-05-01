import React from 'react';
import { render } from '@testing-library/react';
import { HoverCard } from './hover-card';

describe('HoverCard', () => {
  it('renders HoverCard component', () => {
    const { container } = render(<HoverCard>HoverCard Content</HoverCard>);
    expect(container).toBeInTheDocument();
  });
});
