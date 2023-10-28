import React from 'react';
import { render, screen } from '@testing-library/react';
import Movies from '../pages/movie.jsx';

test('Movies component renders correctly', () => {
    render(<Movies />);
    const filterElement = screen.getByText('Add to Watchlist');
    expect(filterElement).toBeInTheDocument();
});
