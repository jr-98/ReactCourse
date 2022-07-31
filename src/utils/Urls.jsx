const apiKey = '39580df38198d2bed5ddb16e4ab7c8e6'
export const getWeather = ({ city, countryCode }) => `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}`

export const getCityInfo = ({ city, countryCode }) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`