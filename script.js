// a class in javascript is like a blueprint for an object
// in this case, we want to create a stopwatch, so our
// Stopwatch class is the blueprint for how our stopwatch works
// we keep track of its time (the currentNumber) as well as
// whether it is currently counting down or not (the isCountingDown boolean)
// we also supply functions that let us start and stop time
// as well as updating the start / stop button text so that
// it matches what we see :)
class Stopwatch {
	constructor() {
		this.currentNumber = 60;
		this.isCountingDown = false;
	}

	start() {
		this.interval = setInterval(() => {
			this.isCountingDown = true;
			this.currentNumber--;
			document.getElementById('currentNumber').innerText = this.currentNumber;
			if (this.currentNumber === 0) {
				clearInterval(countdown);
				this.isCountingDown = false;
				console.log("time's up!");
			}
		}, 1000);
	}

	stop() {
		clearInterval(this.interval);
		this.interval = null;
		this.isCountingDown = false;
	}

	updateBtn() {
		const stopOrStartBtn = document.getElementById('stopstart');
		const currentText = stopOrStartBtn.innerText;
		stopOrStartBtn.innerText = currentText === 'START' ? 'STOP' : 'START';
	}
}

// here, we invoke our class to create an "instance" of a stopwatch
// this is where we use our blueprints to actually build the thing
// it would be like using an architect's plans to build a house, as the contractor

const stopwatch = new Stopwatch();

// here we write some special functions that "listen" to user input, like clicking the mouse or trackpad on a particular button
// and we use the feedback from this to call a function that resets our stopwatch, or stops / starts it
// cool stuff! :D

document.getElementById('restart').addEventListener('click', () => {
	document.getElementById('currentNumber').innerText = 60;
	stopwatch.currentNumber = 60;
});

document.getElementById('stopstart').addEventListener('click', () => {
	if (stopwatch.isCountingDown) {
		stopwatch.stop();
		stopwatch.updateBtn();
	} else {
		stopwatch.start();
		stopwatch.updateBtn();
	}
});
