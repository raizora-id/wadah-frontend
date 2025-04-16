import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import Builder from './index';

describe('UI Builder Component', () => {
  it('renders button correctly', () => {
    render(
      <Builder
        configs={[
          {
            type: 'Button',
            props: {
              variant: 'default',
            },
            children: 'Test Button',
          },
        ]}
      />
    );
    
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();
  });

  it('renders alert with title and description', () => {
    render(
      <Builder
        configs={[
          {
            type: 'Alert',
            props: {
              variant: 'default',
            },
            children: [
              {
                type: 'AlertTitle',
                props: {},
                children: 'Alert Title',
              },
              {
                type: 'AlertDescription',
                props: {},
                children: 'Alert Description',
              },
            ],
          },
        ]}
      />
    );
    
    const alertTitle = screen.getByText('Alert Title');
    const alertDescription = screen.getByText('Alert Description');
    
    expect(alertTitle).toBeInTheDocument();
    expect(alertDescription).toBeInTheDocument();
  });

  it('renders nested components correctly', () => {
    render(
      <Builder
        configs={[
          {
            type: 'Accordion',
            props: {
              type: 'single',
              collapsible: true,
            },
            children: [
              {
                type: 'Button',
                props: {},
                children: 'Nested Button',
              },
            ],
          },
        ]}
      />
    );
    
    const nestedButton = screen.getByRole('button', { name: 'Nested Button' });
    expect(nestedButton).toBeInTheDocument();
  });

  it('renders components with custom IDs', () => {
    render(
      <Builder
        configs={[
          {
            id: 'custom-button',
            type: 'Button',
            props: {},
            children: 'Custom ID Button',
          },
        ]}
      />
    );
    
    const button = screen.getByRole('button', { name: 'Custom ID Button' });
    expect(button).toHaveAttribute('id', 'custom-button');
  });
});