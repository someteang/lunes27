console.log("hola moonbyul");
        console.log("ancho: " + window.innerWidth);
        let par;
        par = document.getElementById("parrafito")
        if (window.innerWidth < 700) {
          par.innerHTML = "menor a 700 px";  
        }
        else {
            par.innerHTML = "mayor o igual a 700 px";
        }

        let captura;

        function setup() {
            createCanvas(800, 600);
            noCursor();
            captura = createCapture(VIDEO);
            captura.hide();
          }
          
          function draw() {
            background(183, 168, 185);
            image(captura, 0, 0, 300, 300);
            ellipse(mouseX, mouseY, 50, 50);
          }