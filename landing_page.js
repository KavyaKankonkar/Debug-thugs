let nums = document.querySelectorAll(".num");
let counter_up = document.querySelector(".counter_up");

let test = false; // when the function doesn't start

window.onscroll = () => {
    if (window.screenY = counter_up.offsetTop) {
        if (!test) {
            nums.forEach((e) => {
                let start = 0;
                let end = e.dataset.num;
                
                let count = setInterval(() => {
                    start++;
                    e.textContent = start;
                    if (start == end) {
                        clearInterval(count);
                    }
                }, 2000 / end)
            })
        }
        test = true;
    }
}