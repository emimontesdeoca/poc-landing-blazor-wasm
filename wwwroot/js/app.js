var loadAos = function () {
    AOS.init({
        duration: 800, // values from 0 to 3000, with step 50ms
    });
}

var loadScroll = function () {
    let scrollpos = window.scrollY
    const header = document.querySelector(".navbar")
    const header_height = header.offsetHeight

    const add_class_on_scroll = () => header.classList.add("scrolled", "shadow-sm")
    const remove_class_on_scroll = () => header.classList.remove("scrolled", "shadow-sm")

    window.addEventListener('scroll', function () {
        scrollpos = window.scrollY;

        if (scrollpos >= header_height) { add_class_on_scroll() }
        else { remove_class_on_scroll() }
    })
}

var load = function () {
    loadAos();
    loadScroll();
}