const myimg = document.getElementById("myimg");
const sysimg = document.getElementById("sysimg");
const mysc = document.getElementById("mysc");
const syssc = document.getElementById("syssc");
let sc0 = 0, sc1 = 0;
function fun1(){
  let sysnum = randNum();
  if(sysnum == 1){
    myimg.src = 'rock.png';
    sysimg.src = `rock.png`;
  }else if(sysnum == 2){
    myimg.src = 'rock.png';
    sysimg.src = `paper.png`;
    syssc.textContent = ++sc1;
  }else{
    myimg.src = 'rock.png';
    sysimg.src = `scissors.png`;
    mysc.textContent = ++sc0;
  }
}
function fun2(){
  let sysnum = randNum();
  if(sysnum == 1){
    myimg.src = 'paper.png';
    sysimg.src = `rock.png`;
    mysc.textContent = ++sc0;
  }else if(sysnum == 2){
    myimg.src = 'paper.png';
    sysimg.src = `paper.png`;
  }else{
    myimg.src = 'paper.png';
    sysimg.src = `scissors.png`;
    syssc.textContent = ++sc1;
    
  }
}
function fun3(){
  let sysnum = randNum();
  if(sysnum == 1){
    myimg.src = 'scissors.png';
    sysimg.src = `rock.png`;
    syssc.textContent = ++sc1;
  }else if(sysnum == 2){
    myimg.src = 'scissors.png';
    sysimg.src = `paper.png`;
    mysc.textContent = ++sc0;
  }else{
    myimg.src = 'scissors.png';
    sysimg.src = `scissors.png`;
  }
}
function fun4(){
  mysc.textContent = 0;
  syssc.textContent = 0;
  sc0 = 0;
  sc1 = 0;
}
function randNum(){
  return Math.floor(Math.random()*3) + 1;
}