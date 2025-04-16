import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Announcement, AnnouncementTag, AnnouncementTitle } from './index';

describe('Announcement Component', () => {
  it('renders correctly', () => {
    render(<Announcement>Test Announcement</Announcement>);
    const element = screen.getByText('Test Announcement');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Announcement className="test-class">Test Announcement</Announcement>);
    const element = screen.getByText('Test Announcement');
    expect(element.parentElement).toHaveClass('test-class');
  });

  it('applies themed variant correctly', () => {
    render(<Announcement themed>Test Announcement</Announcement>);
    const element = screen.getByText('Test Announcement');
    expect(element.parentElement).toHaveClass('announcement-themed');
  });
});

describe('AnnouncementTag Component', () => {
  it('renders correctly', () => {
    render(<AnnouncementTag>Tag</AnnouncementTag>);
    const element = screen.getByText('Tag');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<AnnouncementTag className="test-class">Tag</AnnouncementTag>);
    const element = screen.getByText('Tag');
    expect(element).toHaveClass('test-class');
  });
});

describe('AnnouncementTitle Component', () => {
  it('renders correctly', () => {
    render(<AnnouncementTitle>Title</AnnouncementTitle>);
    const element = screen.getByText('Title');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<AnnouncementTitle className="test-class">Title</AnnouncementTitle>);
    const element = screen.getByText('Title');
    expect(element).toHaveClass('test-class');
  });
});