var mq = window.matchMedia('(min-width: 768px)');
mq.addListener((b) => {
  if (b.matches) {
      // do something for screens > 768px, for example turn on zoom
      ezApi.changeState('enable');
  } else {
      // do something for screens < 768px, for example turn off zoom
      ezApi.changeState('disable');
  }
});