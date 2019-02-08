var video = document.querySelector('video')
var text = document.querySelector('.text')

setTimeout(checkTime, 1000)

function checkTime() {
	if (video.currentTime >= 16.5) {
		video.classList.add('fade')
		text.style.opacity = '1'
	}
	setTimeout(checkTime, 1000)
}