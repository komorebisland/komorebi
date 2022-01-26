let reach_us_back_btn = document.getElementById("reach_us_back_btn");
let reach_us_forward_btn = document.getElementById("reach_us_forward_btn");
let itemClassName = "means_of_transport col-lg-4";
items = document.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = false;

// Click Sucessivo
function moveNext() {
    if (!moving) {
        slide = (slide +1 ) % totalItems;
        moveCarouselTo(slide);
    }
}
// Click Precedente
function movePrev() {
    if (!moving) {
        if (slide === 0) {
            // Vai all'utlima slide
            slide = (totalItems - 1);
        } else {
            slide--;
        }
        moveCarouselTo(slide);
    }
}
function setInitialClasses() {
    // l'ultima slide è la precedente alla prima
    items[totalItems - 1].classList.add("prev");
    // la prima slide è quella inizialmente active
    items[0].classList.add("active");
    // la seconda slide è la successiva alla prima
    items[1].classList.add("next");
}
function moveCarouselTo(slide) {
    if (!moving) {
        // disabilita le interazioni di click per completare l'animazione
        disableInteraction();
        // Aggiorno i precedenti adiacenti prev, next, active
        let newPrevious = slide - 1,
            newNext = slide + 1,
            oldPrevious = slide - 2,
            oldNext = slide + 2;
        
        // Controllo se le nuove slide sono fuori dagli indici
        if (newPrevious <= 0) {
            oldPrevious = (totalItems - 1);
        } else if (newNext >= (totalItems - 1)) {
            oldNext = 0;
        }
        if (slide === 0) {
            newPrevious = (totalItems - 1);
            oldPrevious = (totalItems - 2);
            oldNext = (slide + 1);
        } else if (slide === (totalItems - 1)) {
            newPrevious = (slide - 1);
            newNext = 0;
            oldNext = 1;
        }

        // aggiungendo/rimuovendo classi verrà triggerata l'animazione di transizione
        items[oldPrevious].className = itemClassName;
        if (oldNext < totalItems)
            items[oldNext].className = itemClassName;

        // Add new classes
        items[newPrevious].className = itemClassName + " prev";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";
    }
}
function disableInteraction() {
    moving = true;
    // Dopo 500ms le interazioni saranno riabilitate
    // 500ms = durata transizione .transport_carousel_wrapper .means_of_transport
    setTimeout(function () {
        moving = false
    }, 500);
}
reach_us_back_btn.addEventListener("click", () => {
    movePrev();
});

reach_us_forward_btn.addEventListener("click", () => {
    moveNext();
});