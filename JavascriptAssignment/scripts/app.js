let bkgTimer = setInterval(ChangeBackground, 3000)
let dots = document.querySelectorAll('.dot')
let imgHead = document.querySelector("#header")
let count = 0;



//Contact Form
let isOpen = false; //Toggled down

function ToggleForm(){
    if(isOpen){
    $('#contactForm').animate({
        bottom: '-270px'
    }, 500)
    isOpen = false
}
else{
    $('#contactForm').animate({
        bottom: '0px'
    }, 500)
    isOpen = true
}
}
function ChangeBackground(){
    imgHead.style.backgroundSize = 'auto cover'
    count = count + 1;
    imgHead.setAttribute('style', 'background: url(assets/imgHeader' + count + '.jpg);')
    if(count >= 4){
        count = 0;
    }
    SetActiveDot()

}

function SetImage(num){
    //Stop timer
    clearInterval(bkgTimer);
    //reset
    bkgTimer = setInterval(ChangeBackground, 3000);
    //set count
    count = num;

    imgHead.setAttribute('style', 'background: url(assets/imgHeader' + num + '.jpg);');

    if(num==4){
        count = 0
        
    }
    SetActiveDot()
}

function SetActiveDot(){
    if(count==1){
        dots[0].setAttribute('class','dot active');
        dots[1].setAttribute('class','dot ');
        dots[2].setAttribute('class','dot ');
        dots[3].setAttribute('class','dot ');
    }
    else if(count == 2){
    dots[0].setAttribute('class','dot ');
    dots[1].setAttribute('class','dot active ');
    dots[2].setAttribute('class','dot ');
    dots[3].setAttribute('class','dot ');
    }
    else if(count == 3) {
    dots[0].setAttribute('class', 'dot ');
    dots[1].setAttribute('class','dot ');
    dots[2].setAttribute('class','dot active ');
    dots[3].setAttribute('class','dot ');
    }
    else{
        dots[0].setAttribute('class', 'dot');
        dots[1].setAttribute('class','dot ');
        dots[2].setAttribute('class','dot ');
        dots[3].setAttribute('class','dot active');
    }

}