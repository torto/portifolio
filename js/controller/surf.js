// create an new instance of a pixi stage
var stage = new PIXI.Stage(0xFFFFFF, true);

var gameInjecao = new PIXI.DisplayObjectContainer();

// create a renderer instance
var renderer = PIXI.autoDetectRenderer(900, 500);

// add the renderer view element to the DOM
document.getElementById('center').appendChild(renderer.view);

// MAR CONFIGURAÇAO
var ttMar = PIXI.Texture.fromImage("img/mar.png");

var elMar = new PIXI.TilingSprite(ttMar, 1183, 400);
elMar.position.y = 100;

gameInjecao.addChild(elMar);

//SURFISTA CONFIGURACAO

var ttSurfista = PIXI.Texture.fromImage("img/surfista.png");
var elSurfista = new PIXI.Sprite(ttSurfista);


elSurfista.position.x = 100;
elSurfista.position.y = 100;

gameInjecao.addChild(elSurfista);

stage.addChild(gameInjecao);


//INICIAR ANIMACAO JOGO
requestAnimFrame(animate);

function animate() {
    //MAR ANIMACAO CONSTANTE
    elMar.tilePosition.x += 1;

    renderer.render(stage);
    requestAnimFrame(animate);
}