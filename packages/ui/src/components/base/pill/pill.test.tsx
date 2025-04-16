import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { ChevronUpIcon } from 'lucide-react';
import {
  Pill,
  PillAvatar,
  PillButton,
  PillStatus,
  PillIndicator,
  PillDelta,
  PillIcon,
  PillAvatarGroup
} from './index';

describe('Pill Component', () => {
  it('renders correctly', () => {
    render(<Pill>Test Pill</Pill>);
    const element = screen.getByText('Test Pill');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Pill className="test-class">Test Pill</Pill>);
    const element = screen.getByText('Test Pill');
    expect(element.parentElement).toHaveClass('test-class');
  });
});

describe('PillAvatar Component', () => {
  it('renders correctly', () => {
    render(<PillAvatar fallback="AB" alt="Avatar" data-testid="avatar" />);
    const element = screen.getByTestId('avatar');
    expect(element).toBeInTheDocument();
  });

  it('renders fallback content', () => {
    render(<PillAvatar fallback="AB" alt="Avatar" />);
    const fallback = screen.getByText('AB');
    expect(fallback).toBeInTheDocument();
  });
});

describe('PillButton Component', () => {
  it('renders correctly', () => {
    render(<PillButton>Test Button</PillButton>);
    const element = screen.getByText('Test Button');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<PillButton className="test-class">Test Button</PillButton>);
    const element = screen.getByText('Test Button');
    expect(element.parentElement).toHaveClass('test-class');
  });
});

describe('PillStatus Component', () => {
  it('renders correctly', () => {
    render(<PillStatus>Active</PillStatus>);
    const element = screen.getByText('Active');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<PillStatus className="test-class">Active</PillStatus>);
    const element = screen.getByText('Active');
    expect(element.parentElement).toHaveClass('test-class');
  });
});

describe('PillIndicator Component', () => {
  it('renders correctly', () => {
    render(<PillIndicator data-testid="indicator" />);
    const element = screen.getByTestId('indicator');
    expect(element).toBeInTheDocument();
  });

  it('renders with pulse animation', () => {
    render(<PillIndicator pulse data-testid="indicator" />);
    const spans = screen.getByTestId('indicator').querySelectorAll('span');
    expect(spans.length).toBe(3); // Parent + pulse + indicator
    expect(spans[1]).toHaveClass('animate-ping');
  });

  it('applies different variants', () => {
    render(<PillIndicator variant="error" data-testid="indicator" />);
    const spans = screen.getByTestId('indicator').querySelectorAll('span');
    expect(spans[1]).toHaveClass('bg-rose-500');
  });
});

describe('PillDelta Component', () => {
  it('renders minus icon for zero delta', () => {
    render(<PillDelta delta={0}>0%</PillDelta>);
    const icon = screen.getByText('0%').previousSibling;
    expect(icon).toHaveClass('text-muted-foreground');
  });

  it('renders up icon for positive delta', () => {
    render(<PillDelta delta={10}>10%</PillDelta>);
    const icon = screen.getByText('10%').previousSibling;
    expect(icon).toHaveClass('text-emerald-500');
  });

  it('renders down icon for negative delta', () => {
    render(<PillDelta delta={-10}>-10%</PillDelta>);
    const icon = screen.getByText('-10%').previousSibling;
    expect(icon).toHaveClass('text-rose-500');
  });
});

describe('PillIcon Component', () => {
  it('renders correctly', () => {
    render(<PillIcon icon={ChevronUpIcon} data-testid="icon" />);
    const element = screen.getByTestId('icon');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<PillIcon icon={ChevronUpIcon} className="test-class" data-testid="icon" />);
    const element = screen.getByTestId('icon');
    expect(element).toHaveClass('test-class');
  });
});

describe('PillAvatarGroup Component', () => {
  it('renders correctly', () => {
    render(
      <PillAvatarGroup>
        <PillAvatar fallback="A" alt="Avatar A" />
        <PillAvatar fallback="B" alt="Avatar B" />
      </PillAvatarGroup>
    );
    
    const fallbacks = screen.getAllByText(/[AB]/);
    expect(fallbacks.length).toBe(2);
  });

  it('applies custom className', () => {
    render(
      <PillAvatarGroup className="test-class">
        <PillAvatar fallback="A" alt="Avatar A" />
      </PillAvatarGroup>
    );
    
    const group = screen.getByText('A').closest('.test-class');
    expect(group).toBeInTheDocument();
  });
});