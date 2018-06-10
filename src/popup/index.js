window.onload = function() {
  const form = document.getElementsByClassName('playback')[0];

  form.addEventListener('submit', event => event.preventDefault());

  const speedOptions = document.getElementsByName('speed')[0];

  const defaultSpeed = 1.5;

  // set initial speed
  setSpeed(speedOptions, defaultSpeed);
};

function setSpeed(speedOptions, speed) {
  const speedValues = Object.values(speedOptions).map(option =>
    Number.parseFloat(option.value),
  );

  let selectedIndex = speedValues.indexOf(speed);
  if (selectedIndex < 0) {
    selectedIndex = 3;
  }

  speedOptions.selectedIndex = selectedIndex;
}
