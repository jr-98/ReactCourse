const cities = [
    { city: "Mexico", country: "Mexico", countryCode: "MX" },
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
    { city: "Madrid", country: "España", countryCode: "ES" },
    { city: "Loja", country: "Ecuador", countryCode: "EC" },
]
export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(c => c.countryCode === countryCode)[0].country
)