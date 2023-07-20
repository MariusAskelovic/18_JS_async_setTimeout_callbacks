const timeEl = document.getElementById('time');
setInterval(tick, 1000);
tick(); // tam kad nebutu 1s delay
function tick() {
  const nowObj = new Date();
  const formattedTime = nowObj.toLocaleString('lt', { timeStyle: 'medium' });
  //   console.log(formattedTime);
  timeEl.textContent = formattedTime;
}
