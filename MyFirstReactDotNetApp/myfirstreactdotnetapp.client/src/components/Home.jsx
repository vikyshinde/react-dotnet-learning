import { useEffect, useState } from 'react';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7258/weatherforecast')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);


    return (
        <div>
            <h1>Welcome Vikrant,  Your First React .NET App</h1>
            <p>This is the Home component.</p>
            <h2>Weather Forecast</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        {item.date} - {item.temperatureC}°C - {item.summary}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;