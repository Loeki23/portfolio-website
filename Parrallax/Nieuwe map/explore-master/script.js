let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();



timeline
.to('.rock', 3, {y: -300})
.to('.girl', 3, {y: -200},'-=3')
.fromTo('.bg1',{y:-50}, {y:0, duration: 3},'-=3' )
.to('.content', 3,{top:'0%'}, '-=3')
.fromTo('.content-images', {opacity:0}, {opacity:1, duration:3})
.fromTo('.text', {opacity:0}, {opacity:1, duration:3});

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "200%",
  triggerHook: 0,
})
.setTween(timeline)
.setPin("section")
.addTo(controller);




etInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}


setClock()

