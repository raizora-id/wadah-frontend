import React from 'react';
import { render } from '@testing-library/react';
import { Command } from './command';

describe('Command', () => {
  it('renders Command component', () => {
    const { container } = render(<Command>Command Content</Command>);
    expect(container).toBeInTheDocument();
  });
});
