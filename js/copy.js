var countClick = 0;

function copyEmail() {
    navigator.clipboard.writeText("viktoria.zheneral@gmail.com");

    countClick++;

    switch (countClick) {
        case 1:
            document.getElementById('copy-email').innerHTML = "Email copied!"
            break;
        case 2:
            document.getElementById('copy-email').innerHTML = "Email copied again. Not sure why you did this."
            break;
        case 3:
            document.getElementById('copy-email').innerHTML = "Trust me, email's already been copied. Stop."
            break;
        case 4:
            document.getElementById('copy-email').innerHTML = "Why are you so persistent?.."
            break;
        default:
            document.getElementById('copy-email').innerHTML = "Okay, fine, <b>viktoria.zheneral@gmail.com</b>."
            break;
    }
}