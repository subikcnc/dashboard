"use server"

export async function getWeather(prevState: any, formData: FormData) {
    const lat = formData.get("lat");
    const lon = formData.get("long");
    console.log('lat and lon are', lat, lon);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/oneCall?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    })
    const data = await res.json();
    console.log('weather data is ', data);
    return data
}