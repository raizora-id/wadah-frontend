import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { ResizablePanelGroup, ResizablePanel } from './index';

describe('Resizable Component', () => {
  it('renders correctly', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Left Panel</ResizablePanel>
        <ResizablePanel>Right Panel</ResizablePanel>
      </ResizablePanelGroup>
    );
    const leftPanel = screen.getByText('Left Panel');
    const rightPanel = screen.getByText('Right Panel');
    expect(leftPanel).toBeInTheDocument();
    expect(rightPanel).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
