$(document).ready(function(){
    let a=1;
    let header_counter=7;
    let gif_counter=4;
    let counter1=2;
    let counter2=1;
    let header =document.getElementById('background');
    let body =document.body;
    let changeBgBtn =document.getElementById('changeBg');
    document.querySelector(`#c1`).style.opacity = '1';

    changeBgBtn.addEventListener('click', ()=> {
        counter2 = changeBg(body, 'gif', counter2, gif_counter)
    })

    setInterval(function(){
        changeOpacityForAll();
        document.querySelector(`#c${counter1}`).style.opacity = '1'; 
        counter1 = changeBg(header, 'jpg', counter1, header_counter)
        

    },10000);

    function changeBg(el, type, count, countmax) {
        
        el.style.backgroundImage = 'url(images/header'+count+'.'+type+')';
        console.log(count)
        count++;
        console.log(count)
        if (count> countmax){
        count=1;
        }

        return count
    }
    document.querySelectorAll('.control div').forEach((item, i) => {
        item.style.opacity = '0.4';
        console.log(item, i)
        item.addEventListener('click', ()=>{
            console.log(item);
            counter1=i+1;
            header.style.backgroundImage = 'url(images/header'+counter1+'.jpg)';
            changeOpacityForAll()
            item.style.opacity = '1';
        })
    })
function changeOpacityForAll(){
    document.querySelectorAll('.control div').forEach(item => {
        item.style.opacity = '0.4';
    })
}

    });