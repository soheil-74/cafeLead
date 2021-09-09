// var g = document.getElementById('cafeleadarea');

// function createMenuItem(name) {
//     let span = document.createElement('span');
//     span.textContent = name;
//     return span;
// }
// for (var i = 0, len = g.children.length; i < len; i++) {

// (function(index) {
//     g.children[i].onclick = function() {
//         document.getElementsByClassName("trigger").style.display = 'none';
//         const menu = document.getElementsByClassName('trigger');
//         menu.appendChild(createMenuItem('Home'));
//         menu.appendChild(createMenuItem('Services'));
//         menu.appendChild(createMenuItem('About Us'));
//     }
// })(i);

// (function(index) {
//     g.children[i].onclick = function() {
//         alert(index);
//     }
// })(i);

// }
// var a;


var clicks = 1;

function onClick(event) {

    let span = document.createElement("span");
    document.body.appendChild(span);
    span.classList.add('CafeSpan');
    span.innerHTML = clicks;
    // document.onscroll(0, 0)
    // span.style.display = 'flex';
    span.style.top = event.clientY + 'px';
    span.style.left = event.clientX + 'px';


    if (clicks % 5 == 0) {
        span.style.backgroundColor = 'rgba(255, 92, 27, 0.88)'
        span.style.color = 'rgba(0, 0, 0)'
    }

    clicks += 1;
    // alert(
    //     "clientX value: " + window.screen.height + "\n" +
    //     "clientY value: " + window.screen.width + "\n"
    // );
    // let Cafespan = document.createElement('span');
    // Cafespan.classList.add('CafeSpan');
    // var cafeleadareaClass = document.getElementsByClassName('cafeleadareaClass');
    // cafeleadareaClass.appenChild(Cafespan)
    // let div = document.createElement('div');
    // document.getElementsByClassName("CafeSpan").innerHTML = clicks;
    // document.getElementById("clicks").innerHTML = clicks;
    // document.getElementsByClassName("CafeSpan").style.display = 'flex';
};
document.addEventListener("click", onClick);


function resizeWindow() {

    var CafeSpan = document.getElementsByClassName('CafeSpan');

    for (var i = 0, len = CafeSpan.length; i < len; i++) {

        if (CafeSpan[i].innerHTML === CafeSpan[i + 1].innerHTML) {
            CafeSpan[i].remove()
        }
        CafeSpan[i].style.top = (Math.floor(Math.random() * (window.screen.height - 60 + 1)) + 50) + 'px';
        CafeSpan[i].style.left = (Math.floor(Math.random() * (window.screen.width - 60 + 1)) + 50) + 'px';

        if (CafeSpan[i].style.top > window.screen.height - 100) {
            CafeSpan[i].style.top = (Math.floor(Math.random() * (window.screen.height - 100 + 1)) + 50) + 'px';
        }
        if (CafeSpan[i].style.left > window.screen.width - 100) {
            CafeSpan[i].style.left = (Math.floor(Math.random() * (window.screen.width - 100 + 1)) + 50) + 'px';
        }
    }(i);
    // alert(
    //     "clientX value: " + window.screen.height + "\n" +
    //     "clientY value: " + window.screen.width + "\n"
    // );
    // let span = document.createElement("span");
    // document.body.appendChild(span);
    // span.classList.add('CafeSpan');
    // span.innerHTML = clicks;
    // span.style.top = event.clientY + 'px';
    // span.style.left = event.clientX + 'px';

    // if (clicks % 5 == 0) {
    //     span.style.backgroundColor = 'rgba(255, 92, 27, 0.88)'
    //     span.style.color = 'rgba(0, 0, 0)'
    // }
    // clicks += 1;
};
window.onresize = resizeWindow;