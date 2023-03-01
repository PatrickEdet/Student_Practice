



const colorDisplay = document.getElementById('colorDisplay')

const redSliderValue = document.getElementById('redSliderValue')
const greenSliderValue = document.getElementById('greenSliderValue')
const blueSliderValue = document.getElementById('blueSliderValue')

let redVal;
let greenVal;
let blueVal;

const rgb = document.createElement('span')
colorDisplay.appendChild(rgb)

const updateSliderValue = (channel, spanDisplay) => {
    // get channel value
    const channelValue = document.getElementById(channel).value
    // update span value
    spanDisplay.innerHTML = channelValue;

    if (channel == 'red') { redVal = channelValue }
    if (channel == 'green') { greenVal = channelValue }
    if (channel == 'blue') { blueVal = channelValue }

    rgb.textContent = `rgb(${redVal},${greenVal},${blueVal})`

    if (redVal < 128 || greenVal < 128 || blueVal < 128) {
        rgb.style = 'color: white;'
    } else {
        rgb.style = 'color: black;'

    }

    colorDisplay.style = `background-color: rgb(${redVal},${greenVal},${blueVal})`
}

red.addEventListener('change', () => updateSliderValue('red', redSliderValue))
green.addEventListener('change', () => updateSliderValue('green', greenSliderValue))
blue.addEventListener('change', () => updateSliderValue('blue', blueSliderValue))

window.addEventListener('load', () => {
    updateSliderValue('red', redSliderValue)
    updateSliderValue('green', greenSliderValue)
    updateSliderValue('blue', blueSliderValue)
})


