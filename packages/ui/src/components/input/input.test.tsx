import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './input';

describe('Input', () => {
  it('renders Input component', () => {
    const { container } = render(<Input />);
    expect(container).toBeInTheDocument();
  });
});
