window.onload = function () {
    let startBtn = document.getElementById("btn");
    let texts = document.getElementById("texts");
    let days = ["Saturday", "Sunday", "Monday", "Thousday", "Wednesday", "Thursday", "Friday"];
    let apik = "0186991018204d4ba84183440220707";
    let searchBtn = document.getElementById("searchbtn");
    let afterclick = document.getElementById("afterclick");
    let aftersearch = document.getElementById("aftersearch")


    startBtn.addEventListener("click", function () {
        texts.style.visibility = "hidden";
        afterclick.style.visibility = "visible";
    })

    searchBtn.addEventListener("click", function () {

        let searchValue = document.getElementById("searchbar").value;
        let city = searchValue;
        aftersearch.style.visibility = "visible";
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apik}&q=${city}&days=7`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("cityname").innerHTML = data.location.name;
                document.getElementById("citydetail").innerHTML = data.location.localtime;
                document.getElementById("degree").innerHTML = data.current.temp_c + "&deg";
                document.getElementById("discription").innerHTML = data.current.condition.text;
                document.getElementById("humidity").innerHTML = data.current.humidity + "%";
                document.getElementById("uv").innerHTML = data.current.uv;
                document.getElementById("windspeed").innerHTML = data.current.wind_kph + "km/h";
                document.getElementById("cloud").innerHTML = data.current.cloud + "%";
                document.getElementById("day1").innerHTML = data.forecast.forecastday[1].date;
                document.getElementById("day2").innerHTML = data.forecast.forecastday[2].date;
                document.getElementById("dy1").innerHTML = "Avg " + data.forecast.forecastday[1].day.avgtemp_c + "&deg";
                document.getElementById("dy2").innerHTML = "Avg " + data.forecast.forecastday[2].day.avgtemp_c + "&deg";


                if (data.current.condition.text == "Sunny") {
                    document.getElementById("box").style.backgroundImage = "url(images/glenn-carstens-peters-2E_dT65fyxo-unsplash.jpg)"
                } else if (data.current.condition.text == "Rainy" || data.current.condition.text == "Moderate or heavy rain with thunder") {
                    document.getElementById("box").style.backgroundImage = "url(images/valentin-muller-bWtd1ZyEy6w-unsplash.jpg"
                } else if (data.current.condition.text == "Clear") {
                    document.getElementById("box").style.backgroundImage = "url(images/george-bakos-B-lVzPw5zIg-unsplash.jpg"
                } else if (data.current.condition.text == "Partly cloudy") {
                    document.getElementById("box").style.backgroundImage = "url(images/courtney-read-qHDYc3uVldI-unsplash.jpg"
                } else if (data.current.condition.text == "Patchy light rain with thunder") {
                    document.getElementById("box").style.backgroundImage = "url(images/jose-fontano-TdPQp3fjzOw-unsplash.jpg"
                }


            })
    })
}

