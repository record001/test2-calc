// controllers
let add = document.querySelector(".add")
let pause = document.querySelector(".pause")
let reset = document.querySelector(".reset")
let del = document.querySelector(".delete")

// monitor
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")
let result_time = document.querySelector(".result_time")
let render_result = document.querySelector(".render_result")
let count = 0
let min = 0
let run_time;

reset.addEventListener("click", () => {
    if(!run_time){
        run_time = setInterval(() => {
            second.innerHTML = ++count
    
            if (count == 59) {
                minute.innerHTML = ++min
                count = 0
            }
        }, 1000);
        
    }else{
        count = 0;
        min = 0;
    }


})

let text1 = "Pause"
let text2 = "Resume"

pause.addEventListener("click", () => {
    clearInterval(run_time)

    if(pause.textContent == text1) {
        pause.textContent =text2
    }else if(pause.textContent == text2) {
        pause.textContent = text1

        run_time = setInterval(() => {
            second.innerHTML = ++count
    
            if (count == 59) {
                minute.innerHTML = ++min
                count = 0
            }
        }, 1000);
    }

   

})

add.addEventListener("click", () => {


    render_result.innerHTML +=
        `
    <div class="result">
                <p class="result_time">${minute.textContent}:${second.textContent}</p>
                <button class="delete">x</button>
            </div>
    `
})





    document.body.addEventListener("click", (e) => {
        
        if(e.target.classList.contains("delete")) {
            e.target.parentElement.remove()

        }
    })
