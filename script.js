let increase = document.querySelector('.increase');
let reset = document.querySelector('.reset');
let decrease = document.querySelector('.decrease');
let count = document.querySelector('.count');

let countNumber = 0;

increase.addEventListener('click', function() {
	countNumber++;
	count.textContent = countNumber;
	if (count.textContent > 0) {
		count.style.color = 'green';
	} else if (count.textContent === '0') {
		count.style.color = '#333';
	}
});

reset.addEventListener('click', function() {
	countNumber = 0;
	count.textContent = countNumber;
	count.style.color = '#333';
});

decrease.addEventListener('click', function() {
	countNumber--;
	count.textContent = countNumber;
	if (count.textContent < 0) {
		count.style.color = 'red';
	} else if (count.textContent === '0') {
		count.style.color = '#333';
	}
});
