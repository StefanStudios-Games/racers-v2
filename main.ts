namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
c c c c c c c d c c c c c c c c 
c c c c c c c d c c c c c c c c 
c c c c c c c d c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c d c c c c c c c c 
c c c c c c c d c c c c c c c c 
c c c c c c c d c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c d c c c c c c c c 
c c c c c c c d c c c c c c c c 
c c c c c c c d c c c c c c c c 
c c c c c c c c c c c c c c c c 
`
}
function generateCar () {
    randomBand = Math.randomRange(0, 4)
    car1 = sprites.create(img`
. . . . . . 8 8 c c 8 8 . . . . 
. . . . . 8 6 6 6 6 6 6 8 . . . 
. . . . 6 c 6 6 6 6 6 6 c 6 . . 
. . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
. . . f 6 6 9 6 6 6 6 6 c 6 f . 
. . . f 6 6 9 6 6 6 6 6 6 6 f . 
. . . f 6 6 9 6 6 6 6 6 6 6 f . 
. . . f 6 c 6 9 9 6 6 6 c 6 f . 
. . . 8 6 c 8 c c c c 8 c 6 8 . 
. . . 8 6 8 c b b b b c 8 6 8 . 
. . . 8 6 8 b b b b b b 8 6 8 . 
. . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . f 8 d 8 8 8 8 8 8 d 8 f . 
. . . f 8 6 d 8 8 8 8 d 6 8 f . 
. . . f f 8 8 8 8 8 8 8 8 f f . 
. . . . f f . . . . . . f f . . 
`, SpriteKind.Player)
    car1.setPosition(46 + 16 * randomBand, 94)
    car1.setVelocity(0, -1 * (50 + 20 * randomBand))
}
let randomBand = 0
let car1: Sprite = null
car1 = sprites.create(img`
. . . . . . e e c c e e . . . . 
. . . . . e 2 2 2 2 2 2 e . . . 
. . . . 2 c 2 2 2 2 2 2 c 2 . . 
. . . e 2 c 4 2 2 2 2 2 c 2 e . 
. . . f 2 2 4 2 2 2 2 2 c 2 f . 
. . . f 2 2 4 2 2 2 2 2 2 2 f . 
. . . f 2 2 4 2 2 2 2 2 2 2 f . 
. . . f 2 c 2 4 4 2 2 2 c 2 f . 
. . . e 2 c e c c c c e c 2 e . 
. . . e 2 e c b b b b c e 2 e . 
. . . e 2 e b b b b b b e 2 e . 
. . . e e e e e e e e e e e e . 
. . . f e d e e e e e e d e f . 
. . . f e 2 d e e e e d 2 e f . 
. . . f f e e e e e e e e f f . 
. . . . f f . . . . . . f f . . 
`, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(
            hex`0a00280003010404040404040203030104040404040402030301040404040404020303010404040404040203030104040404040402030301040404040404020303010404040404040203030104040404040402030301040404040404020303010404040404040203030104040404040402030301040404040404020303010404040404040203030104040404040402030301040404040404020303010404040404040203000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath5,myTiles.tile1],
            TileScale.Sixteen
        ))
game.onUpdateInterval(500, function () {
    generateCar()
})
