var game = new Phaser.Game(900, 500, Phaser.CANVAS, 'roda', {
    preload: construtor,
    create: construiu,
    update: animacao
});

var app = {};

function construtor() {
    game.load.image('punk', 'img/man/punk.png');

}

function construiu() {
    //adiciona as imagens na ela
    adicionandoImagens();

    //setando tipo de fisica
    game.physics.startSystem(Phaser.Physics.P2JS);
    //efeito pingar mais forte
    game.physics.p2.restitution = 0.8;

    game.physics.p2.enable(app.punk, false);

    app.cursor = game.input.keyboard.createCursorKeys(); // pega as keys digitadas

}

function animacao() {
    execControles();
}

function adicionandoImagens() {

    app.punk = game.add.sprite(0, 0, 'punk');

}

function execControles() {


}