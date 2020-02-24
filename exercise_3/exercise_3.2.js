const time = new Date();
const hour = time.getHours();
const minute = time.getMinutes();
alert(1440 - hour * 60 - minute);