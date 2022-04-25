var countClick = 0;

function copyEmail() {
    navigator.clipboard.writeText("vyshnovka@gmail.com");

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
        case 50:
            document.getElementById('copy-email').innerHTML = "Congratulations, you've wasted a few minutes of your life!"
            document.getElementById('copy-email').style.cursor = "default";
            document.getElementById('copy-email').removeAttribute("onclick");
            break;
        default:
            document.getElementById('copy-email').innerHTML = "Okay, fine, <b>vyshnovka@gmail.com</b>."
            break;
    }
}