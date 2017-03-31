'use strict'

var truck, body, height, percentage

truck = document.querySelector('.food-truck')
body = document.querySelector('body')
height = body.clientHeight
percentage = 0

truck.style.left = 0

truck.style.transition = '1s'

window.addEventListener('scroll', function () {
	if (this.pageYOffset >= window.innerHeight){
		percentage = ((this.pageYOffset + window.innerHeight) / height) * 100 
		truck.style.left = percentage + '%'

	}else {
		percentage = (this.pageYOffset / height) * 100 
		truck.style.left = percentage + '%'
	}
	
})
