import React from 'react';
import { render, screen } from '@testing-library/react';
import Filter from '../components/filter_layout.jsx';

test('Filter component renders correctly', () => {
    render(<Filter input="latest" />);
    const movieDisplayElement = screen.getByText('▶');
    expect(movieDisplayElement).toBeInTheDocument();
});

// You can write more tests for Filter component based on your requirements.
