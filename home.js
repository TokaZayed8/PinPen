let like_icons = document.querySelectorAll(".cont-data .fa-heart");
let copy_icons = document.querySelectorAll(".cont-data .fa-copy");

like_icons.forEach(like_icon => {
    like_icon.onclick = function () {
        like_icon.classList = "fa-solid fa-heart";
        like_icon.style.color = 'red';
        snackbar.innerHTML = "Like added.";
        snackbar.style.animation = "fadeIn 2s 0.5s ,stable 1s 2.5s, fadeOut 2s 3.5s";
        setTimeout(function () { snackbar.style.animation = ""; }, 5500);
    }
});

copy_icons.forEach(copy_icon => {
    copy_icon.onclick = function () {
        let copied_text = copy_icon.parentElement.parentElement.children[0].children[0].innerHTML + copy_icon.parentElement.parentElement.children[0].children[1].innerHTML;
        copy_icon.classList = "fa-solid fa-copy";
        copy_icon.style.color = '#008e9a';
        snackbar.innerHTML = "Pin copied.";
        snackbar.style.animation = "fadeIn 2s 0.5s ,stable 1s 2.5s, fadeOut 2s 3.5s";
        setTimeout(function () { snackbar.style.animation = ""; }, 5500);
        navigator.clipboard.writeText(copied_text);
    }
});

window.onscroll = function () {
    if (document.documentElement.scrollTop < 10) {
        nav.style.boxShadow = "";
    } else {
        nav.style.boxShadow = "rgba(17, 17, 26, 0.1) 0px 0px 16px";
    }
}