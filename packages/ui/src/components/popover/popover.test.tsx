import React from 'react';
import { render } from '@testing-library/react';
import { Popover } from './popover';

describe('Popover', () => {
  it('renders Popover component', () => {
    const { container } = render(<Popover>Popover Content</Popover>);
    expect(container).toBeInTheDocument();
  });
});
