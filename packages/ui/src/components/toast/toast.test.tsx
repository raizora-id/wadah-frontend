import React from 'react';
import { render } from '@testing-library/react';
import { Toaster, toast } from './toast';

describe('Toast', () => {
  it('renders Toast component', () => {
    const { container } = render(<Toaster />);
    toast('Toast Content');
    expect(container).toBeInTheDocument();
  });
});
