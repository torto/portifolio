var game = new Phaser.Game(900, 500, Phaser.CANVAS, "center", {
    preload: construtor,
    create: construiu,
    update: animacao
});

var app = {};

function construtor() {
    game.load.image('surfista', 'img/surfista.png');
    game.load.image('mar4', 'img/mar/4.png');
    game.load.image('mar3', 'img/mar/3.png');
    game.load.image('mar2', 'img/mar/2.png');
    game.load.image('mar1', 'img/mar/1-test.png');
}

function construiu() {
    //adicionando os mares
    app.mar4 = game.add.tileSprite(0, 331, 1000, 170, 'mar4');
    app.mar3 = game.add.tileSprite(0, 355, 1000, 146, 'mar3');
    app.mar2 = game.add.tileSprite(0, 377, 1000, 124, 'mar2');
    app.mar1 = game.add.tileSprite(0, 430, 1000, 71, 'mar1');

    //adicionando o surfista
    app.surfista = game.add.tileSprite(30, 380, 250, 187, 'surfista');

    //surfista fisica adicionada
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.enable(app.surfista);
    app.surfista.body.allowRotation = false;
    app.surfista.body.inertia = 0;

    app.cursor = game.input.keyboard.createCursorKeys();

}

function animacao() {
    app.mar1.tilePosition.x += 1.5;
    app.mar2.tilePosition.x += 1;
    app.mar3.tilePosition.x += 1;
    app.mar4.tilePosition.x += 0.5;

    if (app.cursor.left.isDown) {
        app.surfista.body.moveLeft(300);
    }

    if (app.cursor.right.isDown) {
        app.surfista.body.moveRight(300);
    }

    if (app.cursor.up.isDown) {
        //app.up - verifica se chegou ao topo
        //do pulo, torna true quando solta o dedo
        if (app.surfista.body.y > 250 && app.up) {
            app.surfista.body.moveUp(500);
        } else {
            app.up = false;
            if (app.surfista.body.y < 380) {
                app.surfista.body.moveDown(600);
            } else {
                app.surfista.body.y = 380;//seta lugar inicio
            }
        }

    }
    if (app.cursor.up.isUp) {
        app.up = true;
        if (app.surfista.body.y < 380) {
            app.surfista.body.moveDown(600);
        } else {
            app.surfista.body.y = 380; //seta lugar inicio
        }
    }

    app.surfista.body.angularVelocity = 0
    app.surfista.body.setZeroForce();
}