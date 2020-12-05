window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // ctx.strokeStyle = "red";
    // ctx.lineWidth = 5;
    // ctx.strokeRect(100, 100, 200, 500);
    // ctx.strokeStyle = "blue"
    // ctx.strokeRect(200, 200, 200, 500);

    let painting = false;

    function startPosition(){
        painting = true;
        draw(e);
    }
    function finishedPositsion() {
        painting = false;
        ctx.beginPath();
    }
    function draw(e) {        
        if (!painting) return;
        ctx.lineWidth = 13;
        ctx.lineCap =  "round"

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
        ctx.strokeStyle = "red";
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPositsion);
    canvas.addEventListener("mousemove", draw);
});
