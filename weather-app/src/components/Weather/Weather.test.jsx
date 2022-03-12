import React from 'react';
import Weather from './Weather';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Weather render', async () => {
    //AAA Arrange act acert
    const { findByRole } = render(<Weather temperature={20} state='Clear' />)
    //eslint-disable-next-line
    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent('20°C')
})