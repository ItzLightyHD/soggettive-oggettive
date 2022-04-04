namespace SpriteKind {
    export const muro = SpriteKind.create()
    export const Player2 = SpriteKind.create()
    export const Muro2 = SpriteKind.create()
    export const Muro3 = SpriteKind.create()
    export const Muro4 = SpriteKind.create()
    export const Muro5 = SpriteKind.create()
    export const Muro6 = SpriteKind.create()
    export const muro7 = SpriteKind.create()
    export const muro8 = SpriteKind.create()
    export const muro9 = SpriteKind.create()
    export const muro10 = SpriteKind.create()
    export const muro11 = SpriteKind.create()
    export const muro12 = SpriteKind.create()
    export const muro13 = SpriteKind.create()
    export const muro14 = SpriteKind.create()
    export const muro15 = SpriteKind.create()
    export const muro16 = SpriteKind.create()
    export const muro17 = SpriteKind.create()
    export const muro18 = SpriteKind.create()
    export const muro19 = SpriteKind.create()
    export const muro20 = SpriteKind.create()
    export const muro21 = SpriteKind.create()
    export const muro22 = SpriteKind.create()
    export const muro23 = SpriteKind.create()
    export const muro24 = SpriteKind.create()
    export const muro25 = SpriteKind.create()
    export const muro26 = SpriteKind.create()
    export const muro27 = SpriteKind.create()
    export const muro28 = SpriteKind.create()
    export const alleato = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro25, function (sprite, otherSprite) {
    if (pesce__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce__lvl_.destroy()
        pesce1__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce1__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce1__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce1__lvl_)
        frase__lvl_.sayText("")
        pesce1__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro26)
        destra__lvl_.setKind(SpriteKind.muro22)
    }
    if (pesce__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro10, function (sprite, otherSprite) {
    if (pesce1__lvl_.overlapsWith(destra__lvl_)) {
        animazioni__lvl_ += -1
        pesce1__lvl_.destroy()
        pesce__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce__lvl_)
        frase__lvl_.sayText("")
        pesce__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro11)
        destra__lvl_.setKind(SpriteKind.muro11)
    }
    if (pesce1__lvl_.overlapsWith(sinistra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.alleato, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        game.showLongText("I periodi con subordinate soggettive vengono retti da verbi impersonali, ad esempio bisogna, si dice, è necessario, capita, succede. Il verbo che regge la subordinata oggettiva ha il suo soggetto.", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Muro2, function (sprite, otherSprite) {
    if (pesce1__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce1__lvl_.destroy()
        pesce__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce__lvl_)
        frase__lvl_.sayText("")
        frase__lvl_.setPosition(80, 35)
        pesce__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.Muro3)
        destra__lvl_.setKind(SpriteKind.Muro3)
    }
    if (pesce1__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro22, function (sprite, otherSprite) {
    if (pesce1__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce1__lvl_.destroy()
        pesce__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce__lvl_)
        frase__lvl_.sayText("")
        pesce__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro23)
        destra__lvl_.setKind(SpriteKind.muro23)
    }
    if (pesce1__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro21, function (sprite, otherSprite) {
    if (pesce__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce__lvl_.destroy()
        pesce1__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce1__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce1__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce1__lvl_)
        frase__lvl_.sayText("")
        pesce1__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro22)
        destra__lvl_.setKind(SpriteKind.muro22)
    }
    if (pesce__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro17, function (sprite, otherSprite) {
    if (pesce__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce__lvl_.destroy()
        pesce1__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce1__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce1__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce1__lvl_)
        frase__lvl_.sayText("")
        pesce1__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro18)
        destra__lvl_.setKind(SpriteKind.muro10)
    }
    if (pesce__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro7, function (sprite, otherSprite) {
    if (pesce__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce1__lvl_.destroy()
        pesce1__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce1__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce1__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce1__lvl_)
        frase__lvl_.sayText("")
        pesce1__lvl_.sayText("")
        frase__lvl_.setPosition(80, 38)
        sinistra__lvl_.setKind(SpriteKind.muro8)
        destra__lvl_.setKind(SpriteKind.muro8)
    }
    if (pesce__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro26, function (sprite, otherSprite) {
    if (pesce1__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce1__lvl_.destroy()
        pesce__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        controller.moveSprite(pesce__lvl_)
        pesce__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        frase__lvl_.sayText("")
        pesce__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro27)
        destra__lvl_.setKind(SpriteKind.muro27)
    }
    if (pesce1__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro20, function (sprite, otherSprite) {
    if (pesce1__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce1__lvl_.destroy()
        pesce__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce__lvl_)
        frase__lvl_.sayText("")
        pesce__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro21)
        destra__lvl_.setKind(SpriteKind.muro21)
    }
    if (pesce1__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro8, function (sprite, otherSprite) {
    if (pesce1__lvl_.overlapsWith(destra__lvl_)) {
        animazioni__lvl_ += -1
        pesce1__lvl_.destroy()
        pesce__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce__lvl_)
        frase__lvl_.sayText("")
        pesce__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro9)
        destra__lvl_.setKind(SpriteKind.muro9)
    }
    if (pesce1__lvl_.overlapsWith(sinistra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro23, function (sprite, otherSprite) {
    if (pesce__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce__lvl_.destroy()
        pesce1__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce1__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce1__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce1__lvl_)
        frase__lvl_.sayText("")
        pesce1__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro24)
        destra__lvl_.setKind(SpriteKind.muro24)
    }
    if (pesce__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro28, function (sprite, otherSprite) {
    if (pesce1__lvl_.overlapsWith(sinistra__lvl_)) {
        game.over(true, effects.confetti)
    }
    if (pesce1__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (animazioni__lvl_ == 100) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 99) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 98) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 97) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 96) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 95) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 94) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 93) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 92) {
        animation.runImageAnimation(
        _12,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 91) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 90) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 89) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 88) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 87) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 86) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 85) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 84) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 83) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 82) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 81) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 80) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 79) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 78) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 77) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 76) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 75) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 74) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 73) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 72) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 71) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 70) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 69) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        200,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro9, function (sprite, otherSprite) {
    if (pesce__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce__lvl_.destroy()
        pesce1__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce1__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce1__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce1__lvl_)
        frase__lvl_.sayText("")
        pesce1__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro10)
        destra__lvl_.setKind(SpriteKind.muro10)
    }
    if (pesce__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (animazioni__lvl_ == 100) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 99) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 98) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 97) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 96) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 95) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 94) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 93) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 92) {
        animation.runImageAnimation(
        _12,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 91) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 90) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 89) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 88) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 87) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 86) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 85) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 84) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 83) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 82) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 81) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 80) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 79) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 78) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 77) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 76) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 75) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 74) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 73) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 72) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 71) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 70) {
        animation.runImageAnimation(
        pesce1__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
    if (animazioni__lvl_ == 69) {
        animation.runImageAnimation(
        pesce__lvl_,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        200,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro11, function (sprite, otherSprite) {
    if (pesce__lvl_.overlapsWith(destra__lvl_)) {
        animazioni__lvl_ += -1
        pesce__lvl_.destroy()
        pesce1__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce1__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce1__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce1__lvl_)
        frase__lvl_.sayText("")
        pesce1__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro12)
        destra__lvl_.setKind(SpriteKind.muro12)
    }
    if (pesce__lvl_.overlapsWith(sinistra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Muro3, function (sprite, otherSprite) {
    if (pesce__lvl_.overlapsWith(destra__lvl_)) {
        animazioni__lvl_ += -1
        pesce__lvl_.destroy()
        pesce1__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce1__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce1__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce1__lvl_)
        frase__lvl_.sayText("")
        pesce1__lvl_.sayText("")
        destra__lvl_.setKind(SpriteKind.Muro4)
        sinistra__lvl_.setKind(SpriteKind.Muro4)
    }
    if (pesce__lvl_.overlapsWith(sinistra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro14, function (sprite, otherSprite) {
    if (pesce1__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce1__lvl_.destroy()
        pesce__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce__lvl_)
        frase__lvl_.sayText("")
        pesce__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro15)
        destra__lvl_.setKind(SpriteKind.muro15)
    }
    if (pesce1__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro, function (sprite, otherSprite) {
    if (pesce1__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce1__lvl_.destroy()
        pesce__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce__lvl_)
        pesce__lvl_.sayText("")
        frase__lvl_.sayText("")
        frase__lvl_.setPosition(80, 30)
    }
    if (pesce1__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
    if (pesce__lvl_.overlapsWith(destra__lvl_)) {
        pesce__lvl_.destroy()
        animazioni__lvl_ += -1
        pesce1__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce1__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce1__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce1__lvl_)
        frase__lvl_.sayText("")
        pesce1__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.Muro2)
        destra__lvl_.setKind(SpriteKind.Muro2)
    }
    if (pesce__lvl_.overlapsWith(sinistra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro27, function (sprite, otherSprite) {
    if (pesce__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce__lvl_.destroy()
        pesce1__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce1__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce1__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce1__lvl_)
        frase__lvl_.sayText("")
        pesce1__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro28)
        destra__lvl_.setKind(SpriteKind.muro22)
    }
    if (pesce__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Muro5, function (sprite, otherSprite) {
    if (pesce__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce__lvl_.destroy()
        pesce1__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce1__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce1__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce1__lvl_)
        frase__lvl_.sayText("")
        pesce1__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.Muro6)
        destra__lvl_.setKind(SpriteKind.Muro6)
    }
    if (pesce__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro18, function (sprite, otherSprite) {
    if (pesce1__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce1__lvl_.destroy()
        pesce__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce__lvl_)
        frase__lvl_.sayText("")
        pesce__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro19)
        destra__lvl_.setKind(SpriteKind.muro19)
    }
    if (pesce1__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro12, function (sprite, otherSprite) {
    if (pesce1__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce1__lvl_.destroy()
        pesce__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce__lvl_)
        frase__lvl_.sayText("")
        pesce__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro13)
        destra__lvl_.setKind(SpriteKind.muro13)
    }
    if (pesce1__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro15, function (sprite, otherSprite) {
    if (pesce__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce__lvl_.destroy()
        pesce1__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce1__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce1__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce1__lvl_)
        frase__lvl_.sayText("")
        pesce1__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro16)
        destra__lvl_.setKind(SpriteKind.muro16)
    }
    if (pesce__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro24, function (sprite, otherSprite) {
    if (pesce1__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce1__lvl_.destroy()
        pesce__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce__lvl_)
        frase__lvl_.sayText("")
        pesce__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro25)
        destra__lvl_.setKind(SpriteKind.muro25)
    }
    if (pesce1__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro13, function (sprite, otherSprite) {
    if (pesce__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce__lvl_.destroy()
        pesce1__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce1__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce1__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce1__lvl_)
        frase__lvl_.sayText("")
        pesce1__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro14)
        destra__lvl_.setKind(SpriteKind.muro14)
    }
    if (pesce__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro19, function (sprite, otherSprite) {
    if (pesce__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce__lvl_.destroy()
        pesce1__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce1__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce1__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce1__lvl_)
        frase__lvl_.sayText("")
        pesce1__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro20)
        destra__lvl_.setKind(SpriteKind.muro20)
    }
    if (pesce__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Muro4, function (sprite, otherSprite) {
    if (pesce1__lvl_.overlapsWith(destra__lvl_)) {
        animazioni__lvl_ += -1
        pesce1__lvl_.destroy()
        pesce__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce__lvl_)
        frase__lvl_.sayText("")
        pesce__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.Muro5)
        destra__lvl_.setKind(SpriteKind.Muro5)
    }
    if (pesce1__lvl_.overlapsWith(sinistra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Muro6, function (sprite, otherSprite) {
    if (pesce1__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce1__lvl_.destroy()
        pesce__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce__lvl_)
        frase__lvl_.sayText("")
        pesce__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro7)
        destra__lvl_.setKind(SpriteKind.muro7)
    }
    if (pesce1__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.muro16, function (sprite, otherSprite) {
    if (pesce1__lvl_.overlapsWith(sinistra__lvl_)) {
        animazioni__lvl_ += -1
        pesce1__lvl_.destroy()
        pesce__lvl_ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Player)
        pesce__lvl_.setPosition(80, 85)
        scaling.scaleToPercent(pesce__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(pesce__lvl_)
        frase__lvl_.sayText("")
        pesce__lvl_.sayText("")
        sinistra__lvl_.setKind(SpriteKind.muro17)
        destra__lvl_.setKind(SpriteKind.muro17)
    }
    if (pesce1__lvl_.overlapsWith(destra__lvl_)) {
        game.over(false, effects.melt)
    }
})
let _12: Sprite = null
let pesce__lvl_: Sprite = null
let destra__lvl_: Sprite = null
let sinistra__lvl_: Sprite = null
let frase__lvl_: Sprite = null
let pesce1__lvl_: Sprite = null
let animazioni__lvl_ = 0
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffff999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffff999999b999999999999
    99999ff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff9999999999b999999999999
    999999fff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff99999999999b999999999999
    999999b9fff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff9999999999999b999999999999
    999999b999fff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff999999999999999b999999999999
    999999b99999fff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff9999999999999999b999999999999
    999999b9999999ff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff999999999999999999b999999999999
    999999b99999999ff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff9999999999999999999b999999999999
    999999b999999999ff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff999999999999999999999b999999999999
    999999b9999999999ff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff99999999999999999999999b999999999999
    999999b99999999999f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff999999999999999999999999b999999999999
    999999b99999999999fff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff99999999999999999999999999b999999999999
    999999b9999999999999ff999999999999999999999999999999999999999999999999999999999999999999eeeee9999999999999999999999999ff999999999999999999999999999b999999999999
    999999b99999999999999f9999999999999999999999ff9999999999999999999999999999999999999999eeeeeeeee9999999999999999999999ff9999999999999999999999999999b999999999999
    999999b99999999999999ff999999999999999999999ffffffffffff99999999999999999999999999999eeeeeeeeeee99999999999999999999f999999999999999999999999999999b999999999999
    999999b999999999999999ff99999999999999999999fffffffffffff999999999999999999999999999eeeeeeeeefeee999999999999999999f9999999999999999999999999999999b999999999999
    999999b9999999999999999ff999999999999999999999fffffffffffff9999999999999999999999999eeeeeeeeeeeee9999999999999999ff99999999999999999999999999999999b999999999999
    999999b99999999999999999f99999999999999999999933333333fffff9999999999999999999999999eeeeeeeeeeeee999999999999999ff999999999999999999999999999999999b999999999999
    999999b99999999999999999ff99999999999999999999333333333ffff9999999999999999999999999eeeeeeeeeeeee99999999999999ff9999999999999999999999999999999999b999999999999
    999999b999999999999999999ff9999999999999999999333f333333fff99999999999999999999999999eeeeeeeeeee9999999999eeeeff99999999999999999999999999999999999b999999999999
    999999b9999999999999999999f99999999999999999993333333333339999999999999999999999999999eeeeeeee99999999999eeeffe999999999999999999999999999999999999b999999999999
    999999b9999999999999999999ff99999999999999999933333333333399999999999999999999999999999eeeee9999999999999eeffee999999999999999999999999999999999999b999999999999
    999999b99999999999999999999ff99999999999999999933333333399999999999999999999999999999977777777999999999977ffeee999999999999999999999999999999999999b999999999999
    999999b999999999999999999999f99999999999999999993333339999999999999999999999999999999777777777799999997777f7eee999ffffffffffffff9999999999999999999b999999999999
    999999b999999999999999999999ff999999999999999999992222229999999999999999999999999999777777777777999977777ff7ee9ffffffffffffffffffff9999999999999999b999999999999
    999999b9999999999999999999999f999999999999999922222222222299999999999999999999999997777111177777777777777f799ffffffffffffffffffffff9999999999999999b999999999999
    999999b99999999999999999999999f9333999999999922222222222222999999999999999999999997777177771777777777777ff9ffffff11111fffff1fffffffff99999999999999b999999999999
    999999b99999999999999999999999f3333399999999922222111112222999999999999999999999997777177771777777777777f9ffffff1ffffffffff1ffffffffff9999999999999b999999999999
    999999b999999999999999999999999f33332222222222222212221222299999999999999999999997777717777177777777777fffffffff1ffffffffff1ffffffffff9999999999999b999999999999
    999999b999999999999999999999999ff3332222222222222212221222229999999999999999999997777711111177777777779ffffffffff1111ffffff1ffffffffff9999999999999b999999999999
    999999b9999999999999999999999993f3332222222222222211111222229999999999999999999997777717777177777777799ffffffffffffff1fffff1ffffffffff9999999999999b999999999999
    999999b9999999999999999999999999ff32222222222222221222222222999999999999999999999777771777717777777799fffffffffffffff1fffff1ffffffffff9999999999999b999999999999
    999999b99999999999999999999999999f99992222222222221222222222299999999999999999999777771777717777777999f99fffffff11111ffffff1fffffffff99999999999999b999999999999
    999999b99999999999999999999999999ff9999999922222221222222222299999999999999999999777777777777777779999f999ffffffffffffffffffffffffff999999999999999b999999999999
    999999b999999999999999999999999999f9999999999222222222222222299999999999999999999777777777777777779999f9999ffffffffffffffffffffffff9999999999999999b999999999999
    999999b999999999999999999999999999f9999999999922222222222222299999999999999999997777777777777777799999f999999ffffffffffffffffffff999999999999999999b999999999999
    999999b999999999999999999999999999f9999999999992222222222222299999999999999999997777777777777777799999999999999fffffffffffffffff9999999999999999999b999999999999
    999999b999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999ff9999999999999999999b999999999999
    999999b99999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999ff9999999999999999999b999999999999
    999999b9999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999ff9999999999999999999b999999999999
    999999b9999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999ff9999999999999999999b999999999999
    999999b99999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999ff9999999999999999999b999999999999
    999999b9999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999ff9999999999999999999b999999999999
    999999b99999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999ff9999999999999999999b999999999999
    999999b99999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999ff9999999999999999999b999999999999
    999999b99999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999ff9999999999999999999b999999999999
    999999b9999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999ff9999999999999999999b999999999999
    999999b99999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999ff9999999999999999999b999999999999
    999999b9999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999ff9999999999999999999b999999999999
    999999b9999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999ff999999f999999999999b999999999999
    999999b999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999ff999999f999999999999b999999999999
    999999b999999999999999999999999999999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999ff999999f999999999999b999999999999
    666666b666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666fffffffff666666666666b666666666666
    666666b6666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666ffffffffff66666666666b666666666666
    666666b66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ff6ff6666666666b666666666666
    666666b6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ff666ff666666666b666666666666
    666666b66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666b666666666666
    666666b66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666b666666666666
    666666b66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666b666666666666
    666666b66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666b666666666666
    66666cc666cc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666b666666666666
    66666ccccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666b666666666666
    666666cccc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666b666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666cc666cc66666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ccccccc66666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666cccc666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666776666666666666666776666666666666666667666666666666676666666666666
    6666666666666666666666676666666666666666666666666666666666666666666666666666666666666666666666766666666666666666676666666666666666677666666666666676666666666666
    6666666666666666666666776666666666666666676666666666666666666666666666666666666666666666666666776666666666666666677666666666666667776666666666666677666666666666
    6666666666666666666667766666666666666666676666666666666666776666666666766666666666666666666666676666666666666666667766666666666677666666666666666667666666666666
    6666666666666666666667666666666666666666676666666666666667766666666666776666666666666666666666677666666666666666666766666666666676666666666666666667666666666666
    6666666666666666666667666666666666666666676666666666666676666666666666676666666666666666666666667666666666666666666776666666666677666666666666666666766666666666
    6666666666666666666667666666666666666666677666666666666676666666666666677666666666666666666666667666666666666666666676666666666667766666666666666666766666666666
    6666666666666666666667766666666666666666666766666666666676666666666666667666666666666666666666667666666666666666666676666666666666776666666666666667766666666666
    6666666666666666666666776666666666666666666676666666666677666666666666667766666666666666666666667666666666666666666676666666666666676666666666666667666666666666
    6666666666666666666666676666666666666666666676666666666667766666666666666766666666666666666666667666666666666666666676666666666666677666666666666677666666666666
    6666666666666666666666677666666666666666666676666666666666766666666666666766666666666666666666667666666666666666666676666666666666667666666666666676666666666666
    6666666666666666666666667666666666666666666676666666666666776666666666666766666666666666666666677666666666666666666676666666666666667766666666666676666666666666
    6666666666666666666666667766666666666666666676666666666666676666666666666766666666666666666667776666666666666666666776666666666666666766666666666676666666666666
    6666666666666666666666666766666666666666666776655555566666676666666666667666666666665555557777555555555555666666666766666666666666666766666666655557555555566666
    6666666666666666666666666766666666666666666755555555555566676666666666677666666666555555577555555555555555555556666766666666666666666766666555555557555555555566
    6666666666666666666666666766666666666666555755555555555555776666666666676666666655555555555555555555555555555555555755555555555555557555555555555555555555555555
    6555555555666666666666666766666666666555555755555555555577755566666666676666655555555555555555555555555555555555555575555555555555557555555555555535555555555555
    5555555555555556666666666766666666655555555555555555555555555555555555755555555555555555555555555555555555555555555555555555555555555555555555555333555555555555
    5555555555555555556666666766666665555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555553333355555555555
    5555555555555555555556667766665555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555553f3f355555555555
    5555555555555555555555557555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555553333355555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555533333333333335555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555553333333333355555555
    55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555557777777c7555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555557c7c777555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555577755775555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555333355333555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555333555533355555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    `)
tiles.setCurrentTilemap(tilemap`level2`)
animazioni__lvl_ = 100
pesce1__lvl_ = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Player)
pesce1__lvl_.setPosition(80, 85)
scaling.scaleToPercent(pesce1__lvl_, 75, ScaleDirection.Uniformly, ScaleAnchor.Middle)
controller.moveSprite(pesce1__lvl_)
frase__lvl_ = sprites.create(img`
    9 9 
    9 9 
    `, SpriteKind.Player)
let Alleato__lvl_ = sprites.create(img`
    3 
    `, SpriteKind.alleato)
Alleato__lvl_.setPosition(147, 109)
frase__lvl_.y = 20
frase__lvl_.sayText("Era meglio affrontare i problemi uno alla volta.")
pesce1__lvl_.sayText("AFFRONTARE I PROBLEMI UNO ALLA VOLTA")
sinistra__lvl_ = sprites.create(img`
    c c 
    c c 
    `, SpriteKind.muro)
destra__lvl_ = sprites.create(img`
    c c 
    c c 
    `, SpriteKind.muro)
sinistra__lvl_.setPosition(12, 80)
destra__lvl_.setPosition(142, 83)
