
window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        
        const getWeather = async () => {
            const getData = await fetch(`https://api.weatherapi.com/v1/current.json?key=64930df30e9240b6be3214240242205&q=${latitude},${longitude}&lang=pt`)

            const res = await getData.json()
            console.log(res.current.condition.text) //Condição
            console.log(res.location.name) //Cidade
            console.log(res.current.temp_c) //Temperatura
            console.log(res.current.feelslike_c) //SEnsação térmica
            console.log(res.current.condition.wind_kph) //Velocidade do vento

            const condicao = document.createElement('p')
            condicao.innerHTML=res.current.condition.text

            document.querySelector('.dados').appendChild(condicao)
        }

        getWeather()
    })
})








