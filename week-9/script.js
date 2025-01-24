function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function calculateBrightness(hexColor) {
    const red = parseInt(hexColor.slice(1, 3), 16);
    const green = parseInt(hexColor.slice(3, 5), 16);
    const blue = parseInt(hexColor.slice(5, 7), 16);
    const brightness = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
    return brightness;
}

function hexToColorName(hex) {
    const colors = {
        "#FFFFFF": "white", "#000000": "black", "#FF0000": "red", "#00FF00": "lime", "#0000FF": "blue",
        "#FFFF00": "yellow", "#FF00FF": "magenta", "#00FFFF": "cyan", "#808080": "gray", "#C0C0C0": "silver"
    };
    return colors[hex.toUpperCase()] || hex;
}

function changeBoxColor(box, hexCodeElement) {
    const newColor = getRandomColor();
    box.style.backgroundColor = newColor;
    
    const colorName = hexToColorName(newColor);
    hexCodeElement.textContent = colorName; 
    hexCodeElement.style.color = calculateBrightness(newColor) < 128 ? 'white' : 'black';
    hexCodeElement.style.backgroundColor = newColor;  
}

document.querySelectorAll('.box').forEach((box) => {
    const hexCodeElement = box.querySelector('.hex-code');
    
    changeBoxColor(box, hexCodeElement);
    
    box.addEventListener('click', () => {
        changeBoxColor(box, hexCodeElement);
    });
});