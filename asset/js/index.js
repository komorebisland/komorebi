// ease:
// back, elastic, bounce
// gsap.to(".div2", {duration: 2, x: 300, backgroundColor: "#560563", borderRadius: "20%", width: "200px", ease: "rough"});

// selettore multiplo:
// gsap.to(".div2, .div3", {duration: 2, x: 300, backgroundColor: "#560563", borderRadius: "20%", width: "200px", ease: "rough"});

// facendo così l'animazione avviene allo stesso momento per tutti i .circle
// gsap.from(".circle", {duration: 1, opacity: 0, y: 150});

// così l'animazione avviene in modo staggered
// gsap.from(".circle", {duration: 1, opacity: 0, y: 150, stagger: 0.25});

// gsap.from(".circle", {duration: 1, opacity: 0, y: () => Math.random() * 400 - 200, stagger: 0.25});
// gsap.from(".circle", {duration: 1, opacity: 0, y: "random(-200, 200)", stagger: 0.25});


// SEQUENCING con DELAY
// gsap.to(".div2", {duration: 2, x: 300, backgroundColor: "#560563", borderRadius: "20%", width: "200px"});
// gsap.from(".circle", {duration: 1, opacity: 0, y: "random(-200, 200)", stagger: 0.25, delay: 1.5});


// TIMELINE, con la timeline non devo gestire manualmente i delay, viene gestito in automatico alla fine dell'effetto precedente
// let tl = gsap.timeline();
// timeline che si ripete
// let tl = gsap.timeline({repeat: 2});

// let tl = gsap.timeline({repeat: 2, yoyo: true});


// tl.from(".div2", {duration: 2, x: 300, backgroundColor: "#560563", borderRadius: "20%", width: "200px"});
// tl.to(".div2", {duration: 2, rotation: 360});
// tl.from(".circle", {duration: 1, opacity: 0, y: "random(-200, 200)", stagger: 0.25});

// aggiungere un delay alla timeline 
// tl.from(".circle", {duration: 1, opacity: 0, y: "random(-200, 200)", stagger: 0.25}, "+=1");

