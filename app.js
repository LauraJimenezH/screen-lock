    var button = document.getElementsByClassName('button-pass');
    var  i = 0;
    var password = ''

   
    function clickPass(event) {

        event.preventDefault();
        // console.log(event)
        password=+event.target.value;
        event.target.style.color = 'black'
        event.target.style.backgroundColor = 'white'
        setTimeout(() => {
            event.target.style.color = 'white'
            event.target.style.backgroundColor = 'transparent'
        }, 400);
        i++
        console.log(i)

                console.log(password)
        if(i === 5) {
            for (let j = 0; j < button.length; j++) {
                button[j].disabled = true;
                
            }
            // button.forEach(element => {
            //     element.disable = true;
            // });
        }


    
    }

