import React from "react";
import { render } from "@testing-library/react";
import WeatherDetails from "./WeatherDetails";

test('Weather details render', async () => {
    const { findByText } = render(<WeatherDetails humidity={10} wind={20} />)

    //eslint-disable-next-line
    const humidity = await findByText(/10/);
    //eslint-disable-next-line
    const wind = await findByText(/20/);
    expect(humidity).toHaveTextContent('Humedad: 10%')
    expect(wind).toHaveTextContent('Viento: 20Km/h')
})