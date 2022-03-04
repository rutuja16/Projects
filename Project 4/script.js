function clickme(){
    var hours=document.getElementById('hours');
    var minutes=document.getElementById('mins');
    var seconds=document.getElementById('secs');
    var am=document.getElementById('ampm');

    var clock=new Date();

    var hrs=clock.getHours()
    var mins=clock.getMinutes()
    var secs=clock.getSeconds()
    var am_pm

    if(hrs==0){
      hrs=12;
    }

    if(hrs>12){
      hrs=hrs-12;
      am_pm='PM';
    }
    else{
      am_pm='AM'
    }
    
    if(hrs<10){
      hrs='0'+hrs;
    }
    if(mins<10){
      mins='0'+mins;
    }
    if(secs<10){
      secs='0'+secs;
    }

    hours.innerHTML=hrs+' '+'Hours';
    minutes.innerHTML=mins+' '+'Mins';
    seconds.innerHTML=secs+' '+'Secs';
    am.innerHTML=am_pm;

}

setInterval(clickme,1000);

function timeDiv(){
  // document.getElementById('times')
  var wakeup=document.getElementById('wakeup-time');
  var wakeup_value=wakeup.options[wakeup.selectedIndex].text;
  document.getElementById('w1').innerHTML="Wake Up Time : "+ wakeup_value;

  var lunch=document.getElementById('lunch-time');
  var lunch_value=lunch.options[lunch.selectedIndex].text;
  document.getElementById('l2').innerHTML="Lunch Time : "+ lunch_value;

  var nap=document.getElementById('nap-time');
  var nap_value=nap.options[nap.selectedIndex].text;
  document.getElementById('n3').innerHTML="Nap Time : "+ nap_value;

  var night=document.getElementById('night-time');
  var night_value=night.options[night.selectedIndex].text;
  document.getElementById('n4').innerHTML="Night Time : "+ night_value;
  
}

function settime(){
  var wakeup_t=document.getElementById('wakeup-time').value;
  var lunch_t=document.getElementById('lunch-time').value;
  var nap_t=document.getElementById('nap-time').value;
  var night_t=document.getElementById('night-time').value;

  var greeting = document.getElementById('greeting');
  var health = document.getElementById('health');

  var hour=new Date().getHours();
  //console.log(hour);

  if(hour>12){
    hour=hour-12;
  }

  if(wakeup_t==hour){
    document.getElementById('image').style.backgroundImage="url(./asset/wakeup.svg)";
    greeting.innerHTML="GOOD MORNING!! WAKE UP !!";
    health.innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
    }

  if(lunch_t==hour){
  document.getElementById('image').style.backgroundImage="url(./asset/lunch.png)";
  greeting.innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEPs";
  health.innerHTML="LET'S HAVE SOME LUNCH !!";
  }


  if(nap_t==hour){
    document.getElementById('image').style.backgroundImage="url(./asset/nap.png)";
    greeting.innerHTML="GOOD EVENING !!";
    health.innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  }

  if(night_t==hour){
    document.getElementById('image').style.backgroundImage="url(./asset/night.png)";
    greeting.innerHTML="GOOD NIGHT !!";
    health.innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
  }

timeDiv();

}
//setInterval(settime,500);