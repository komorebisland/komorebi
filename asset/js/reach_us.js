
let pathMongolfiera = anime.path('#motionPathMongolfiera'),
    pathDirigibile = anime.path('#motionPathDirigibile'),
    pathDeltaplano = anime.path('#motionPathDeltaplano');
// mylength = pathEl.getTotalLength(),
// mypt1 = pathEl.getPointAtLength(mylength * .10),
// mypt2 = pathEl.getPointAtLength(mylength * .25);

let motionPathMongolfiera = anime({
    targets: '#svgMongolfiera',
    translateX: pathMongolfiera('x'),
    translateY: pathMongolfiera('y'),
    // rotate: path('angle'),
    easing: 'linear',
    duration: 2000,
    // direction: 'alternate',
    autoplay: false,
    elasticity: 2000,
    loop: true,
    direction: 'alternate',
    update: function (anim) {
        // console.log(path('x'));
    }
});


motionPathMongolfiera.seek(1210);

motionPathMongolfiera.play();

let motionPathDirigibile = anime({
    targets: '#svgDirigibile',
    translateX: pathDirigibile('x'),
    translateY: pathDirigibile('y'),
    // rotate: path('angle'),
    easing: 'linear',
    duration: 2000,
    // direction: 'alternate',
    autoplay: false,
    elasticity: 2000,
    loop: true,
    direction: 'alternate',
    update: function (anim) {
        // console.log(path('x'));
    }
});

motionPathDirigibile.seek(1210);

motionPathDirigibile.play();

let motionPathDeltaplano = anime({
    targets: '#svgDeltaplano',
    translateX: pathDeltaplano('x'),
    translateY: pathDeltaplano('y'),
    // rotate: path('angle'),
    easing: 'linear',
    duration: 2000,
    // direction: 'alternate',
    autoplay: false,
    elasticity: 2000,
    loop: true,
    direction: 'alternate',
    update: function (anim) {
        // console.log(path('x'));
    }
});

motionPathDeltaplano.seek(1210);

motionPathDeltaplano.play();

// setInterval(function(){
//     var node = document.getElementById('mongo_container');
//     console.log(node);
//     let height = $("#mongo_container").height();
//     console.log(height);
//     // node.style.cssText += 'height:'+height+'px';
// },2000);

// let $bg_mongolfiera = $('#bg_mongolfiera');
// $bg_mongolfiera.on('load', function () {
// let imgMongoldiera = document.getElementById('mongo_container');
// let imgDirigibile = document.getElementById('dirigibile_container');
// let imgDeltaplano = document.getElementById('deltaplano_container');
// imgMongoldiera.style.cssText += 'height:' + ($(this).height() + 70) + 'px';
// imgDirigibile.style.cssText += 'height:' + ($(this).height() + 70) + 'px;'
// imgDeltaplano.style.cssText += 'height:' + ($(this).height() + 70) + 'px;';
// });
$("#bg_mongolfiera").one("load", function () {
    let imgMongoldiera = document.getElementById('mongo_container');
    let imgDirigibile = document.getElementById('dirigibile_container');
    let imgDeltaplano = document.getElementById('deltaplano_container');
    imgMongoldiera.style.cssText += 'height:' + ($(this).height() + 70) + 'px';
    imgDirigibile.style.cssText += 'height:' + ($(this).height() + 70) + 'px;'
    imgDeltaplano.style.cssText += 'height:' + ($(this).height() + 70) + 'px;';
}).each(function () {
    if (this.complete) {
        // $(this).load(); // For jQuery < 3.0 
        $(this).trigger('load'); // For jQuery >= 3.0 
    }
});


motionPathDeltaplano.seek(1210);

motionPathDeltaplano.play();