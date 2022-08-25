var secondhand = document.querySelector('.sec')
var minhand = document.querySelector('.min')
var hourhand = document.querySelector('.hour')
function setDate(){
    var now = new Date()
    var second = now.getSeconds()
    var secondDegrees = ((second / 60) * 360)+90 

    secondhand.style.transform =`rotate(${secondDegrees}deg) `
    // console.log(second)
    var minutes = now.getMinutes()
    var minutesDegrees = ((minutes / 60) * 360)+90 

    minhand.style.transform =`rotate(${minutesDegrees}deg) `

    var hour = now.getHours()
    var hourDegrees = ((hour / 60) * 360)+210

    hourhand.style.transform =`rotate(${hourDegrees}deg) `
}
setInterval(setDate,1000)

