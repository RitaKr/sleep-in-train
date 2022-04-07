$(document).ready(function(){
    let a=1;
    let header_counter=7;
    let gif_counter=5;
    let counter1=1;
    let counter2=1;
    let header =document.getElementById('background');
    let body =document.body;
    let changeBgBtn =document.getElementById('changeBg');
    let lastClick = 0;
    document.querySelector(`#c1`).style.opacity = '1';


    changeBgBtn.addEventListener('click', ()=> {
        counter2 = changeBg(body, 'gif', counter2, gif_counter)
    })

    setInterval(function(){
        animation('center', 'calc(50% - 120px)')
        setTimeout(()=>{
            counter1 = changeBg(header, 'jpg', counter1, header_counter)
            changeOpacityForAll();
            document.querySelector(`#c${counter1}`).style.opacity = '1'; 
            animation('calc(50% + 120px)', 'center')
        }, 140)
        
        
        

    },10000);

    function changeBg(el, type, count, countmax) {
        //console.log(count)
        count++;
        //console.log(count)
        if (count> countmax) count=1;
        el.style.backgroundImage = 'url(images/header'+count+'.'+type+')';
        

        return count
    }
    document.querySelectorAll('.control div').forEach((item, i) => {
        item.style.opacity = '0.4';
        //console.log(item, i)
        item.addEventListener('click', ()=>{
            if (lastClick>i) {
                animation('center', 'calc(50% + 120px)')
                setTimeout(()=>{
                    // console.log(item);
                    counter1=i+1;
                    header.style.backgroundImage = 'url(images/header'+counter1+'.jpg)';
                    changeOpacityForAll()
                    item.style.opacity = '1';
                animation('calc(50% - 120px)', 'center')
                }, 140)
            } else if (lastClick<i) {
                animation('center', 'calc(50% - 120px)')
                setTimeout(()=>{
                    // console.log(item);
                    counter1=i+1;
                    header.style.backgroundImage = 'url(images/header'+counter1+'.jpg)';
                    changeOpacityForAll()
                    item.style.opacity = '1';
                animation('calc(50% + 120px)', 'center')
                }, 140)
            }
            lastClick = i;
        })
    })
function changeOpacityForAll(){
    document.querySelectorAll('.control div').forEach(item => {
        item.style.opacity = '0.4';
    })
}
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                
                                                                            
    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
                                                                            
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                animation('center', 'calc(50% - 120px)')
                setTimeout(()=>{
                    //console.log(counter1)
                    counter1++;
                    if (counter1> header_counter) counter1=1;
                    changeOpacityForAll();
                    document.querySelector(`#c${counter1}`).style.opacity = '1'; 
                    header.style.backgroundImage = 'url(images/header'+counter1+'.jpg)';
                    //console.log(counter1)
                    animation('calc(50% + 120px)', 'center')
                }, 140)
                
                
            } else {
                animation('center', 'calc(50% + 120px)')
                setTimeout(()=>{
                    //console.log(counter1)
                    counter1--;
                    if (counter1<1) counter1=header_counter;
                    changeOpacityForAll();
                    document.querySelector(`#c${counter1}`).style.opacity = '1'; 
                    header.style.backgroundImage = 'url(images/header'+counter1+'.jpg)';
                    //console.log(counter1)
                    animation('calc(50% - 120px)', 'center')
                }, 140)
            }                       
        } else {
            if ( yDiff > 0 ) {
                /* down swipe */ 
            } else { 
                /* up swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
    };

    function animation(start, fin){
        header.animate([
            { backgroundPositionX: start },
            { backgroundPositionX: fin  }
        ], {
            // timing options
            duration: 150,
            iterations: 1
          });
    }
});


