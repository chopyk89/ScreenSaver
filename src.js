
const images = [
    'https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=9060',
    'https://images.pexels.com/photos/1451074/pexels-photo-1451074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=560',
    'https://images.pexels.com/photos/1460880/pexels-photo-1460880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200',
    'https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500',
    'https://images.pexels.com/photos/87284/ocean-seacoast-rocks-water-87284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=400',
    'https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=1260',
    'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];
function getRandomImage() {
    let number = Math.floor(Math.random() * images.length);
    let left = Math.floor(Math.random() * 100);
    let top = Math.floor(Math.random() * 100);

    image.setAttribute('src', images[number]);
    image.style.top = top + 'px';
    image.style.left = left + 'px';

}
const activityTimeout;
const imageTimeout;
let image = document.getElementById("screenSaver");
function resetTime() {
    if (activityTimeout) {
        clearTimeout(activityTimeout);
    }
    hideScreenSaver();
    activityTimeout = setTimeout(showScreenSaver, 10000);
}

function showScreenSaver() {
    image.style.display = 'block';
    imageTimeout = setInterval(getRandomImage, 5000);
}

function hideScreenSaver() {
    if (imageTimeout) {
        image.style.display = 'none';
        clearInterval(imageTimeout);
    }
}

resetTime();
