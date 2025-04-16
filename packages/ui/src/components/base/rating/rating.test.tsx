import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { HeartIcon } from 'lucide-react';
import { Rating, RatingButton } from './index';

describe('Rating Component', () => {
  it('renders with default star icons', () => {
    render(
      <Rating data-testid="rating">
        <RatingButton />
        <RatingButton />
        <RatingButton />
        <RatingButton />
        <RatingButton />
      </Rating>
    );
    
    const rating = screen.getByTestId('rating');
    expect(rating).toBeInTheDocument();
    expect(rating.querySelectorAll('button').length).toBe(5);
  });

  it('handles controlled value', () => {
    render(
      <Rating value={3} data-testid="rating">
        <RatingButton />
        <RatingButton />
        <RatingButton />
        <RatingButton />
        <RatingButton />
      </Rating>
    );
    
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveAttribute('disabled', '');
    
    // Check if first 3 stars are filled
    const stars = screen.getAllByRole('button');
    expect(stars[0].querySelector('svg')).toHaveClass('fill-current');
    expect(stars[1].querySelector('svg')).toHaveClass('fill-current');
    expect(stars[2].querySelector('svg')).toHaveClass('fill-current');
    expect(stars[3].querySelector('svg')).not.toHaveClass('fill-current');
    expect(stars[4].querySelector('svg')).not.toHaveClass('fill-current');
  });

  it('handles onValueChange callback', () => {
    const onValueChange = vi.fn();
    
    render(
      <Rating onValueChange={onValueChange}>
        <RatingButton />
        <RatingButton />
        <RatingButton />
        <RatingButton />
        <RatingButton />
      </Rating>
    );
    
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[2]); // Click the third star
    
    expect(onValueChange).toHaveBeenCalledWith(3);
  });

  it('handles readOnly mode', () => {
    render(
      <Rating value={3} readOnly data-testid="rating">
        <RatingButton />
        <RatingButton />
        <RatingButton />
        <RatingButton />
        <RatingButton />
      </Rating>
    );
    
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveAttribute('disabled', '');
    
    // Verify that all buttons have cursor-default class
    buttons.forEach(button => {
      expect(button).toHaveClass('cursor-default');
    });
  });

  it('supports custom icons', () => {
    render(
      <Rating data-testid="rating">
        <RatingButton icon={<HeartIcon data-testid="heart-icon" />} />
        <RatingButton icon={<HeartIcon />} />
        <RatingButton icon={<HeartIcon />} />
      </Rating>
    );
    
    const heartIcon = screen.getByTestId('heart-icon');
    expect(heartIcon).toBeInTheDocument();
  });
  
  it('handles keyboard navigation', () => {
    const onValueChange = vi.fn();
    
    render(
      <Rating onValueChange={onValueChange}>
        <RatingButton />
        <RatingButton />
        <RatingButton />
        <RatingButton />
        <RatingButton />
      </Rating>
    );
    
    const buttons = screen.getAllByRole('button');
    
    // Focus the first button
    fireEvent.focus(buttons[0]);
    
    // Press right arrow to move to next star
    fireEvent.keyDown(buttons[0], { key: 'ArrowRight' });
    expect(onValueChange).toHaveBeenCalledWith(2);
    
    // Press left arrow to move back
    fireEvent.keyDown(buttons[1], { key: 'ArrowLeft' });
    expect(onValueChange).toHaveBeenCalledWith(1);
  });
});