function visiblity() {
    let type = document.getElementById('pwd').attributes.getNamedItem('type').value;
    if (type == 'password') {
        document.getElementById('pwd').setAttribute("type", "text");
        document.getElementById('btn-visibility').innerHTML = "Hide";
    }
    else {
        document.getElementById('pwd').setAttribute("type", "password");
        document.getElementById('btn-visibility').innerHTML = "Show";
    }
}

function strength(e) {
    let text = e.target.value;
    let result;
    let barValue = 0;


    // Regular expressions don't have an AND operator, so it's pretty hard to write a regex that matches valid passwords, when validity is defined by something AND something else AND something else...
    // But, regular expressions do have an OR operator, so just apply DeMorgan's theorem, and write a regex that matches invalid passwords:
    // Anything with less than eight characters OR anything with no numbers OR anything with no uppercase OR or anything with no lowercase OR anything with no special characters.
    // So:
    // ^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$
    // If anything matches that, then it's an invalid password

    let strong = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$/;
    if(text.length == 0){
        result = "Not Valid";
        barValue = 0;
    }
    if ((text.length < 5)) {
        result = "Weak";
        barValue = 50;
    }
    else if (text.length >= 5 && text.length < 10) {
        result = "Moderate";
        barValue = 100;
    }
    else if ((strong.test(text))) {
        result = "Strong";
        barValue = 200;
    }
    else {
        result = "Not Valid";
        barValue = 0;
    }

    document.getElementById('info').innerHTML = result;
    document.getElementById('info').style.color = (result == "Weak" ? 'red' : (result == 'Moderate' ? 'orange' : (result == 'Strong' ? 'green' : 'grey')));

    let color = document.getElementById('info').style.color;
    document.getElementById('fill-color').style.backgroundColor = color;
    document.getElementById('fill-color').style.width = barValue + 'px';

}