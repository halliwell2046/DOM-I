window.onload = function() {

    let totalMS = 0;
    const secTen = document.getElementById('secondTens');
    const secOne = document.getElementById('secondOnes');
    const msHun = document.getElementById('msHundreds');
    const msTen = document.getElementById('msTens');
    const allNums = Array.from(document.getElementsByClassName('digit'));
    function cb() {
      if (totalMS > 9999) {
        clearInterval(clearTimer);
        allNums.forEach(e => {
          e.classList.add('redDigit');
        });
      }
      else {
        totalMS = totalMS + 10;
        secTen.innerHTML = Math.floor(totalMS / 10000);
        secOne.innerHTML = Math.floor(totalMS % 10000 / 1000);
        msHun.innerHTML = Math.floor(totalMS % 10000 % 1000 / 100);
        msTen.innerHTML = Math.floor(totalMS % 10000 % 1000 % 100 / 10);
      }
      
    }
  
    let clearTimer;
  
    let startButton = document.getElementById('start');
    let resetButton = document.getElementById('reset');
  
    startButton.onclick = function() {
      this.setAttribute('disabled', '');
      clearTimer = setInterval(cb, 10);
    }
  
    resetButton.onclick = function() {
      totalMS = 0;
      clearInterval(clearTimer);
      allNums.forEach(e => {
        e.classList.remove('redDigit');
      });
      secTen.innerHTML = secOne.innerHTML = msHun.innerHTML = msTen.innerHTML = '0';
      startButton.removeAttribute('disabled');
    }
  
  };