

let arrow = document.querySelector('.fof')
let def = document.querySelector('.defoult')
console.log(arrow);



    arrow.onclick = () => {
        def.style.display = "block"
        def.style.height = 100 + "px"

        arrow.style.rotate = 180 + 'deg'

        if (arrow.style.rotate = 180 + 'deg') {

            arrow.onclick = () => {
                def.style.display = "none"
                def.style.height = 0 + "px"
                arrow.style.rotate = 360 + 'deg'
                console.log('lf,vl');
            }
        
        
        }
    }

    


