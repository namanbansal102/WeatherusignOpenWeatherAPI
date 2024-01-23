console.log("Script is running")

let temp=document.querySelector('#temp')
let searchBtn=document.querySelector('#search-button')
let weathHeading=document.querySelector('#cloud')

let datePrint=document.querySelector('.date-time');
let showError=document.querySelector('#showError')
let weatherImg=document.querySelector('#weatherImg')
let humidity=document.querySelector('#humidity')
let windStatus=document.querySelector('#wind-value');
let place=document.querySelector('#place')
let riseTime=document.querySelector('#sunrise-time')
let setTime=document.querySelector('#sunset-time')
let visible=document.querySelector('#visible')
let aqiDisplay=document.querySelector('#aqi-display');
let aqiQuality=document.querySelector('#aqi-quality')
let sunriseCalcTime=document.querySelector('.sunrise-cont h4 span')
let sunsetCalcTime=document.querySelector('#sunset-calculated-time');
let ball=document.querySelector('.ball');
var weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";

// setInterval(() => {
//     var date=new Date();
   
//     datePrint.innerText=`${weekdays[date.getDay()]}  ${date.getHours()-12}:${date.getMinutes()}:${date.getSeconds()}`
// }, 1000);

function updateTemp(){
    showError.innerText=""
        let city=document.querySelector('#search').value
        console.log("Updatetemp is runnign")
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9b694e9e03935575c8b81d325078bddf`
        fetch(url).then((Response=>Response.json())).then(function (data) {
            console.log(data)
            let tempo=data.main.temp-273.15;
            tempo=tempo.toFixed(2)
            temp.innerHTML=`${tempo}°C`
            weathHeading.innerHTML=data.weather[0].description
            weatherImg.innerHTML=` <img id="weathImg" src="img/${data.weather[0].icon}.png" alt="">`
            humidity.innerHTML=` Humidity:${data.main.humidity}`
            windStatus.innerHTML=`${data.wind.speed}`
            place.innerHTML=`${data.name}`
            let sunRise=data.sys.sunrise;
            sunrise=new Date(sunRise*1000);
            riseTime.innerHTML=`${sunrise.getHours()} : ${sunrise.getMinutes()} AM`
            let currentDate=new Date();
            currentDate=currentDate.getHours()
            console.log(sunriseCalcTime)
            console.log(` new${new Date().getHours()-sunrise.getHours()}`)
            
            let sunSet=data.sys.sunset;
            sunSet=new Date(sunSet*1000);
            setTime.innerHTML=`${sunSet.getHours()-12} : ${sunSet.getMinutes()} PM`
            visible.innerHTML=`${data.visibility/1000}`
            sunriseCalcTime.innerText=`${currentDate- sunSet.getHours()}`
          
            let lat=data.coord.lat;
            let lon=data.coord.lon
            console.log('lat is running')
            console.log(lat,lon);
            let urlo=`https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}76&key=YOUR_API_KEY`
            fetch(urlo).then((Response=>Response.json())).then(function (result) {
                console.log(result)
                let aqi=result.data.current.pollution.aqius
                aqiDisplay.innerHTML=`${aqi}`
                let str=""
                if(aqi<50){
                    
                ball.style.bottom='20px'

                    str="Good";
                   
                }
                else if(aqi>51 && aqi<100){
                    str="Satisfactory"
                    ball.style.bottom='40px'
                }
                else if( aqi>101 && aqi<200){
                    str="Modurately Polluted"
                    ball.style.bottom='50px'
                }
                else if( aqi>201 && aqi<300){
                    str="Poor"
                    ball.style.bottom='70px'
                }
                else if( aqi>301 && aqi<400){
                    str="Very Poor"
                    ball.style.bottom='80px'
                }
                else if( aqi>401 && aqi<500){
                    str="Sevre"
                    ball.style.bottom='90px'
                }
                aqiQuality.innerHTML=str
               


            }).catch(function (error) {
            showError.innerText=error;
            
          
        })
            
            
        }
        
        
        ).catch(function (error) {
            showError.innerText="Given City Not Founded"
            
          
        })
       
    }
    
