document.addEventListener("keydown", enventKey)
            function enventKey(){
                let code = 'event key: ' + event.key +
                ' | event code: ' + event.code + 
                ' | event keycode: ' + event.keyCode
                document.getElementById("event-key").innerHTML = code
            }