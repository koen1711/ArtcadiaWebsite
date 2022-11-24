// Get buttons
var btn1 = document.getElementById("btn-slide-1");
var btn2 = document.getElementById("btn-slide-2");
var btn3 = document.getElementById("btn-slide-3");
var pages = document.getElementById("pages");

// set page-about to display right next to these x: 1.265625, y: 98, width: 1369.234375, height: 79.875
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
page1.classList.add("transition-1s");
page2.classList.add("transition-1s");
page3.classList.add("transition-1s");
// set page2 and page3 right next to page1 in px
// set up the same y pos as page1
page2.style.left = "101.5%";
page3.style.left = "203%";
page1.style.top = "95px";
page2.style.top = "95px";
page3.style.top = "95px";

// Get slider

const slider = document.getElementById("slider");
slider.classList.add("transition-0s");

//TweenX(btn2.getBoundingClientRect().x, slider);

//TweenX(btn1.getBoundingClientRect().x, slider);

// set up the TweenXing of pages

TweenX(btn1.getBoundingClientRect().x, slider);

slider.classList.remove("transition-0s");
slider.classList.add("transition-1s");


curbtn = btn1;

function TweenX(pos, elm, type = "px") {
    if (elm == undefined) {
        elm = slider;
    }
    // Add where the slider should go
    elm.style.left = pos + type;
}
function TweenY(pos, elm, type = "px") {
    if (elm == undefined) {
        elm = slider;
    }
    // Add where the slider should go
    elm.style.top = pos + type;
}

var modal = document.getElementById("modal");

btn1.addEventListener("click", function() {
    // Add the position based off btn1
    TweenX(btn1.getBoundingClientRect().x, slider);
    // put page-home in the right place
    TweenX(-0.5, page1, "%");
    TweenX(101.5, page2, "%");
    TweenX(203, page3, "%");
    TweenX(0, pages);
    page1.classList.remove("hide-y-overflow");
    page2.classList.add("hide-y-overflow");
    page3.classList.add("hide-y-overflow");
    curbtn = btn1;

    var video = document.getElementById("anim");
    video.pause();
    modal.style.display = "none";
});

btn2.addEventListener("click", function() {
    TweenX(btn2.getBoundingClientRect().x, slider);
    TweenX(-101.5, page1, "%");
    TweenX(-0.5, page2, "%");
    TweenX(101.5, page3, "%");
    page1.classList.add("hide-y-overflow");
    page2.classList.remove("hide-y-overflow");
    page3.classList.add("hide-y-overflow");
    curbtn = btn2;

    // Make video stop playing
    var video = document.getElementById("anim");
    video.pause();
    modal.style.display = "none";
});


btn3.addEventListener("click", function() {
    TweenX(btn3.getBoundingClientRect().x, slider);
    TweenX(-203, page1, "%");
    TweenX(-101.5, page2, "%");
    TweenX(-0.5, page3, "%");
    page1.classList.add("hide-y-overflow");
    page2.classList.add("hide-y-overflow");
    page3.classList.remove("hide-y-overflow");
    curbtn = btn3;

    // Make video play after 1 second
    setTimeout(function() {
        document.getElementById("anim").play();
    }, 1000);
});

window.onresize = function() {
    slider.classList.remove("transition-1s");
    slider.classList.add("transition-0s");
    // wait for the resize to finish
    setTimeout(function() {
        

        // get the new position of the button
        TweenX(curbtn.getBoundingClientRect().x, slider);
        TweenY(curbtn.getBoundingClientRect().y, slider);

    }, 5);

    // wait for 1 second
    setTimeout(function() {

        slider.classList.remove("transition-0s");
        slider.classList.add("transition-1s");
    }, 10);

}