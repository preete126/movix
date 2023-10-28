import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/Home';

test('App component renders correctly', () => {
  render(<Home />);
  const inputElement = screen.getByPlaceholderText('Search');
  const searchButton = screen.getByText('Search');
  expect(inputElement).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});

test('App component calls getInput function with input value', () => {
  render(<Home />);
  const inputElement = screen.getByPlaceholderText('Search');
  const searchButton = screen.getByText('Search');
  const navigateSpy = jest.fn();
  const originalUseNavigate = require('react-router-dom').useNavigate;
  require('react-router-dom').useNavigate = () => navigateSpy;

  fireEvent.change(inputElement, { target: { value: 'test input' } });
  fireEvent.click(searchButton);

  expect(navigateSpy).toHaveBeenCalledWith('search/test%20input');

  // Restore the original useNavigate function
  require('react-router-dom').useNavigate = originalUseNavigate;
});

test('App component shows alert when input is empty', () => {
  render(<Home />);
  const searchButton = screen.getByText('Search');
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

  fireEvent.click(searchButton);

  expect(alertSpy).toHaveBeenCalledWith('Please enter a value');
  alertSpy.mockRestore();
});
