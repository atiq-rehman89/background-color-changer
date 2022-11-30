const hexText = document.getElementById('hex-text');

document.body.style.background = 'white'
hexText.innerText = '#fffff'
function generateColor() {
    document.body.style.background = 'white'
    let random = (Math.random() * 0xfffff * 1000000).toString(16);
    let randomColor = '#' + random.slice(0, 6)
    document.body.style.background = randomColor;
    hexText.innerText = randomColor

    navigator.clipboard.writeText(randomColor)
    console.log(randomColor)
}

