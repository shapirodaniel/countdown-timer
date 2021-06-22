class Stopwatch {

  constructor(){
    this.currentNumber = 60;
    this.isCountingDown = false;
  }

  start () {
    this.interval = setInterval(() => {
      this.isCountingDown = true;
      this.currentNumber--
      document.getElementById('currentNumber').innerText = this.currentNumber
      if (this.currentNumber === 0){
        clearInterval(countdown)
        this.isCountingDown = false;
        console.log("time's up!")
      }
    }, 1000)
  }

  stop () {
    clearInterval(this.interval);
    this.interval = null;
    this.isCountingDown = false;
  }
}

const stopwatch = new Stopwatch()

document.getElementById('restart').addEventListener('click',
  () => {
    document.getElementById('currentNumber').innerText = 60;
    stopwatch.currentNumber = 60;
})

document.getElementById('stopstart').addEventListener('click',
  () => {
    if (stopwatch.isCountingDown) {
      stopwatch.stop()
    } else {
      stopwatch.start()
    }
})
