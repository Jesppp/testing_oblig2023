
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Teller } from '../Teller';

test('Teller komponenten minsker telleren sånn den skal', () => {
  const { getByText } = render(<Teller />);
  const button = getByText('DecrementButton');
  fireEvent.click(button);
  expect(getByText('Counter: -1')).toBeTruthy();

});