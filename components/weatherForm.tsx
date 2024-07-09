'use client'
import { getWeather } from "@/lib/actions/getWeather.action"
import { useFormState } from "react-dom"

const initState = {lat: 20, long: -90}

const WeatherForm = () => {
    const [formState, action] = useFormState<{lat: number, long: number }>(getWeather, initState)

    return <form action={action}>
         <h3 className="my-4">Latitude</h3>
         <input type="number" name="lat" />
         <h3 className="my-4">Longitude</h3>
         <input type="number" name="long" />
            <button type="submit">Submit</button>
    </form>
}

export default WeatherForm