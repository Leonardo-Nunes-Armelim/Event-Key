document.addEventListener("keydown", enventKey)
function enventKey() {
    // event key:
    let code1 = '<h1><strong>' + event.key + '</strong></h1>'
    // event code:
    let code2 = '<h1><strong>Event Code: ' + event.code + '</strong></h1>'
    // event keycode:
    let code3 = '<h1><strong>Event Keycode: ' + event.keyCode + '</strong></h1>'
    // Return
    document.getElementById("button").innerHTML = code1
    document.getElementById("sub-menu1").innerHTML = code2
    document.getElementById("sub-menu2").innerHTML = code3
}