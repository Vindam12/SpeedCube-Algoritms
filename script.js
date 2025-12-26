const mainDiv = document.getElementById("flexbox");
const mainDivGrid = document.getElementById("flexbox2");

const KolvoButton = 1;

const KolvoButton2A1 = 5;

const buttonNames = ["2x2"];


for (let i = 0; i < buttonNames.length; i++)  {

    const button = document.createElement("button");

    button.textContent = buttonNames[i];

    button.classList.add("flexbox-item", "hidden", "hidden-buttons-1s");

    button.id = buttonNames[i];

    if ((buttonNames.length-i) === 1) {
        button.classList.add("down-radius")
    }

    mainDiv.append(button);

}  

const flexbox2 = document.createElement("div");
flexbox2.classList.add("flexbox");
flexbox2.id = "flexbox3";
mainDivGrid.append(flexbox2);
const buttonNames2A1 = [
"Oll",
"Pbl",
"Cll",
"Eg1",
"Eg2",
"Tcll+",
"Tcll-",
"Teg2+",
"Teg2-",
"Leg1",
// "LS1",
// "LS2",
// "LS3",
// "LS4",
// "LS5",
// "LS6",
// "LS7",
// "LS8",
// "LS9",
"Teg1- a",
"Teg1+ a",
"TEG1- b",
"TEG1+ b",
"TEG1- c",
"TEG1+ c",
"TEG1- d",
"TEG1+ d",
];

for (let i = 0; i < buttonNames2A1.length; i++)  {

    const a = document.createElement("a");

    const button = document.createElement("button");

    button.textContent = buttonNames2A1[i];

    button.classList.add("flexbox-item", "hidden", "hidden-buttons-2A1s");

    if ((buttonNames2A1.length-i) === 1) {
        button.classList.add("down-radius")
    }

    const aHref = "2x2/" + buttonNames2A1[i] + ".html";

    a.href = aHref;

    flexbox2.append(a);

    a.append(button); 

}

const Buttons1 = document.querySelectorAll(".hidden-buttons-1s");
const Buttons2A1 = document.querySelectorAll(".hidden-buttons-2A1s");

const MainButton1 = document.getElementById("algoritms");
const twox2 = document.getElementById("2x2");


Buttons1.forEach(Button => {
    
    Button.addEventListener('mouseenter', function() {

        for (let i = 0; i < Buttons1.length; i++) {
        Buttons1[i].classList.remove("hidden");
        }
            

        }); 

    Button.addEventListener('mouseleave', function() {

        for (let i = 0; i < Buttons1.length; i++) {
        Buttons1[i].classList.add("hidden");
        }
        });   

});



    twox2.addEventListener('mouseenter', function() {

        for (let i = 0; i < Buttons2A1.length; i++) {
        Buttons2A1[i].classList.remove("hidden");
        }
            

        }); 

    twox2.addEventListener('mouseleave', function() {

        for (let i = 0; i < Buttons2A1.length; i++) {
        Buttons2A1[i].classList.add("hidden");
        }

        });   




MainButton1.addEventListener('mouseenter', function() {
    let hiddenButtons = document.getElementsByClassName("hidden-buttons-1s");

    for (let i = 0; i < hiddenButtons.length; i++) {
        hiddenButtons[i].classList.remove("hidden");
    }

}); 

MainButton1.addEventListener('mouseleave', function() {
    let hiddenButtons = document.getElementsByClassName("hidden-buttons-1s");

    for (let i = 0; i < hiddenButtons.length; i++) {
        hiddenButtons[i].classList.add("hidden");
    }

});


Buttons2A1.forEach(Button => {
    
        Button.addEventListener('mouseenter', function() {

              for (let i = 0; i < Buttons2A1.length; i++) {
                Buttons2A1[i].classList.remove("hidden");
              }
              for (let i = 0; i < Buttons1.length; i++) {
                Buttons1[i].classList.remove("hidden");
              }

            }); 

        Button.addEventListener('mouseleave', function() {

              for (let i = 0; i < Buttons2A1.length; i++) {
                Buttons2A1[i].classList.add("hidden");
              }
              for (let i = 0; i < Buttons1.length; i++) {
                Buttons1[i].classList.add("hidden");
              }

            });   

});