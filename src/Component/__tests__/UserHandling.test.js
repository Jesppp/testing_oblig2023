import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { UserHandling } from '../UserHandling';

test('Laging av bruker fungerer som det skal', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<UserHandling />);
    const usernameInput = getByPlaceholderText('Brukernavn');
    const emailAddressInput = getByPlaceholderText('Epost addresse');
    const button = getByText('Lag bruker');

    // Tester først om jeg får errormelding i queryByText hvis jeg bruker en email uten @

    fireEvent.change(usernameInput, {target: {value: 'testing'}});
    fireEvent.change(emailAddressInput, {target: {value: 'test'}});
    fireEvent.click(button);
    expect(queryByText('Invalid input av verdier. Epost addressen må inneholde alfakrøll: @.')).toBeTruthy();

    // Tester deretter om jeg ikke(toBeNull) får errormeldingen når jeg inkludere en @ i test emailadressen.

    fireEvent.change(usernameInput, {target: {value: 'Brukernavn123'}});
    fireEvent.change(emailAddressInput, {target: {value: 'test@gmail.com'}});
    fireEvent.click(button);
    expect(queryByText('Invalid input av verdier. Epost addressen må inneholde alfakrøll: @.')).toBeNull();

});