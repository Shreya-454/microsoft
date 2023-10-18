
// back to top-------
window.addEventListener('scroll', function () {
    let backtotop = document.getElementById("backtotop")
    if (window.scrollY > 300) { backtotop.style.display = 'block' }
    else { backtotop.style.display = 'none' }
})

// preloader------
setTimeout(() => {
    document.getElementById("preloader").classList.add("opacity-0");
    document.getElementById("preloader").classList.add("pointer_event_none")
    document.body.classList.remove("overflow-hidden")
}, 2000);
