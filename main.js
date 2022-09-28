const   vsImage1 = document.querySelector('.vs_1_img'),
        vsImage2 = document.querySelector('.vs_2_img'),
        vsButton1 = document.querySelector('.vs_1_button'),
        vsButton2 = document.querySelector('.vs_2_button')

const IMAGES = 7

function random (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const updateImages = (currentImage) => {
    const imageObject = currentImage == 2 ? vsImage1 : vsImage2

    imageObject.src = `photos/${random(1, IMAGES)}.jpg`
}

vsButton1.onclick = () => updateImages(1)

vsButton2.onclick = () => updateImages(2)

updateImages(1)
updateImages(2)