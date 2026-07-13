document.body.style.fontFamily = "Arial";
document.body.style.textAlign = "center";
document.body.style.marginTop = "60px";
document.body.style.background = "rgb(123, 32, 220)";

function createButton(text, color) {
    let btn = document.createElement("button");

    btn.innerText = text;
    btn.style.padding = "15px 30px";
    btn.style.margin = "15px";
    btn.style.fontSize = "18px";
    btn.style.border = "none";
    btn.style.borderRadius = "8px";
    btn.style.background = color;
    btn.style.color = "white";
    btn.style.cursor = "pointer";
    btn.style.transition = "0.4s";

    document.body.appendChild(btn);

    return btn;
}

// Button 1 - Zoom Animation
let btn1 = createButton("Zoom", "royalblue");

btn1.onclick = function () {
    btn1.style.transform = "scale(1.4)";
    setTimeout(() => {
        btn1.style.transform = "scale(1)";
    }, 300);
};

// Button 2 - Rotate Animation
let btn2 = createButton("Rotate", "green");

btn2.onclick = function () {
    btn2.style.transform = "rotate(360deg)";
    setTimeout(() => {
        btn2.style.transform = "rotate(0deg)";
    }, 500);
};

// Button 3 - Move Right Animation
let btn3 = createButton("Move", "orange");

btn3.onclick = function () {
    btn3.style.transform = "translateX(100px)";
    setTimeout(() => {
        btn3.style.transform = "translateX(0)";
    }, 400);
};

// Button 4 - Fade Animation
let btn4 = createButton("Fade", "purple");

btn4.onclick = function () {
    btn4.style.opacity = "0.2";
    setTimeout(() => {
        btn4.style.opacity = "1";
    }, 500);
};

// Button 5 - Color Change Animation
let btn5 = createButton("Color", "red");

btn5.onclick = function () {
    btn5.style.background = "gold";
    btn5.style.color = "black";

    setTimeout(() => {
        btn5.style.background = "red";
        btn5.style.color = "white";
    }, 500);
};