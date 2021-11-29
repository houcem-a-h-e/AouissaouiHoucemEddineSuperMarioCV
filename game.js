//Kaboom version 0.5.0 needs to be in use for this game by adding the correct script tag in the HTML file.

kaboom({
  global: true,
  fullscreen: true,
  scale: 2,
  debug: true,
  clearColor: [0, 0, 0, 1],
})

// Speed identifiers
const MOVE_SPEED = 200
const JUMP_FORCE = 360
const BIG_JUMP_FORCE = 550
let CURRENT_JUMP_FORCE = JUMP_FORCE
const FALL_DEATH = 400
const ENEMY_SPEED = 20
let pipereached=false;
// Game logic
const directions = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right"
};



let isJumping = true

loadRoot('https://i.imgur.com/')
loadSprite('coin', 'wbKxhcd.png')
loadSprite('evil-shroom', 'KPO3fR9.png')
loadSprite('brick', 'pogC9x5.png')
loadSprite('block', 'M6rwarW.png')
loadSprite('mario', 'Wb1qfhK.png')
loadSprite('mushroom', '0wMd92p.png')
loadSprite('surprise', 'gesQ1KP.png')
loadSprite('unboxed', 'bdrLpi6.png')
loadSprite('pipe-top-left', 'ReTPiWY.png')
loadSprite('pipe-top-right', 'hj2GK4n.png')
loadSprite('pipe-bottom-left', 'c1cYSbt.png')
loadSprite('pipe-bottom-right', 'nqQ79eI.png')

loadSprite('blue-block', 'fVscIbn.png')
loadSprite('blue-brick', '3e5YRQd.png')
loadSprite('blue-steel', 'gqVoI2b.png')
loadSprite('blue-evil-shroom', 'SvV4ueD.png')
loadSprite('blue-surprise', 'RMqCc1G.png')



scene("game", ({ level, score }) => {
  layers(['bg', 'obj', 'ui'], 'obj');

  const maps = [
    [
      '                                                                                                                                                                                                                                                                    ',
      '                                                                                                                                                                                                                                                                    ',
      '                                                                                                                                                                                                                                                                    ',
      '                                                                                                                                                                                                                                                                    ',
      '                                                                                                                                                                                                                                                                    ',
      '     %   =*=%=                                       =*=%=                                                                                                                                                                                                        +-',
      '                            -+                                                                                                                                                                                                                                    ()',
      '                            ()                                    -+                    -+                         -+                            -+                  +-                  +-                   +-                          +-                      ()',
      '                            ()                                    ()                    ()                         ()                            ()                  ()                  ()                   ()                          ()                      ()',
      '==============================   ===================================   ===================   ========================   ===========================   =================   =================    =================    ========================   =====================',
    ]
    /*[
      '£                                       £',
      '£                                       £',
      '£                                       £',
      '£                                       £',
      '£                                       £',
      '£        @@@@@@              x x        £',
      '£                          x x x        £',
      '£                        x x x x  x   -+£',
      '£               z   z  x x x x x  x   ()£',
      '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    ]*/
  ]

  const levelCfg = {
    width: 20,
    height: 20,
    '=': [sprite('block'), solid()],
    '$': [sprite('coin'), 'coin'],
    '%': [sprite('surprise'), solid(), 'coin-surprise'],
    '*': [sprite('surprise'), solid(), 'mushroom-surprise'],
    '}': [sprite('unboxed'), solid()],
    '(': [sprite('pipe-bottom-left'), solid(), scale(0.5)],
    ')': [sprite('pipe-bottom-right'), solid(), scale(0.5)],
    '-': [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'],
    '+': [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'],
    '^': [sprite('evil-shroom'), solid(), 'dangerous'],
    '#': [sprite('mushroom'), solid(), 'mushroom', body()],
    '!': [sprite('blue-block'), solid(), scale(0.5)],
    '£': [sprite('blue-brick'), solid(), scale(0.5)],
    'z': [sprite('blue-evil-shroom'), solid(), scale(0.5), 'dangerous'],
    '@': [sprite('blue-surprise'), solid(), scale(0.5), 'coin-surprise'],
    'x': [sprite('blue-steel'), solid(), scale(0.5)],

  }

  const gameLevel = addLevel(maps[level], levelCfg)

  const scoreLabel = add([
    text(score),
    pos(30, 6),
    layer('ui'),
    {
      value: score,
    }
  ])
 
const linebreak = '\n';
  add([text(' Aouissaoui Houcem Eddine '  ), pos(40, 50)])
  add([text(' Vous devez jouer le jeu \n \n et avancer afin de consulter \n \n les rubriques du CV '  ), pos(40, 250)])
  add([text(' Education'  ), pos(500, 250)])
  add([text(' Cycle ingenieur informatique \n \n specialite Genie Logiciels \n \n Esprit (2019 -2022)'), pos(550, 25)])
  add([text(' Master commerce international : \n \n premiere annee \n \n Essect ( 2014 -2015)'), pos(1310,25)])
  add([text(' Licence appliquee en economie et finance international \n \n specialite commerce international : \n \n  Essect ( 2011 -2014)'), pos(1750,25)])
  add([text(' IT support technique : \n \n The Hive, MARS 2019 - JUIN 2021 \n \n Depannage et resolution de divers  problemes techniques\n \n de l\'application IOS LUCE \n \n operations de base de donnees via MongoDB (Robot3T),\n \n execution des requetes HTTP via POSTMAN'  ), pos(2300, 25)])
  add([text(' Conseiller client : \n \n CONVERGYS, OCTOBRE 2018 - FÉVRIER 2019 \n \n Gestion des réclamations clients \n \n Support technique et commercial'), pos(2890,25)])
  add([text(' Community Manager : \n \n RENAUD CONSULTING, AVRIL 2018, JUIN 2018 \n \n Publicite FB \n \n Redacteur web/reseaux sociaux'), pos(3300,50)])
  add([text(' Designer \n \n FIVERR, 2017 \n \n concevoir des bannieres de reseaux sociaux \n \nediteur video'), pos(3700,50)])
  add([text('Facilitateur YouthAct & Active Citizens \n \n JASMINE FOUNDATION/ BRTISH COUNCIL, \n \n OCTOBRE 2015 - DÉCEMBRE 2017 \n \n Constitution et gestion d\'un groupe de participants \n\n etude et implementation des projets regionaux '), pos(4100,25)])
  add([text('Tresorier \n \n ATCV, JUILLET 2014 - JUILLET 2017 \n \n planification et suivi du plan budgetaire \n \n Gestion des relations financieres internes et externes'), pos(4700,25)])
  add([text(' Experience '  ), pos(2300, 250)])
  add([text('Societe civile'), pos(4100,250)])
  add([text(' J\'espere que vous avez \n \n trouve ce voyage amusant :) '), pos( 4900,250)])
  
  function big() {
    let timer = 0
    let isBig = false
    return {
      update() {
        if (isBig) {
          CURRENT_JUMP_FORCE = BIG_JUMP_FORCE
          timer -= dt()
          if (timer <= 0) {
            this.smallify()
          }
        }
      },
      isBig() {
        return isBig
      },
      smallify() {
        this.scale = vec2(1)
        CURRENT_JUMP_FORCE = JUMP_FORCE
        timer = 0
        isBig = false
      },
      biggify(time) {
        this.scale = vec2(2)
        timer = time
        isBig = true     
      }
    }
  }

  const player = add([
    sprite('mario'), solid(),
    pos(30, 0),
    body(),
    big(),
    origin('bot')
  ]
  )

 
  action('mushroom', (m) => {
    m.move(20, 0)
  })

    

  player.on("headbump", (obj) => {
    if (obj.is('coin-surprise')) {
      gameLevel.spawn('$', obj.gridPos.sub(0, 1))
      destroy(obj)
      gameLevel.spawn('}', obj.gridPos.sub(0,0))
    }
    if (obj.is('mushroom-surprise')) {
      gameLevel.spawn('#', obj.gridPos.sub(0, 1))
      destroy(obj)
      gameLevel.spawn('}', obj.gridPos.sub(0,0))}
      
  })


  player.collides('mushroom', (m) => {
    destroy(m)
    player.biggify(6)
  })

  player.collides('coin', (c) => {
    destroy(c)
    scoreLabel.value++
    scoreLabel.text = scoreLabel.value
  })

  action('dangerous', (d) => {
    d.move(-ENEMY_SPEED, 0)
  })

  player.collides('dangerous', (d) => {
    if (isJumping) {
      destroy(d)
    } else {
      go('lose', { score: scoreLabel.value})
    }
  })

  player.action(() => {
    camPos(player.pos)
    if (player.pos.y >= FALL_DEATH) {
      go('lose', { score: scoreLabel.value})
    }
  })
 
  player.collides('pipe', () => {
    keyPress('down', () => {
      go('game', {
        level: (level + 1) % maps.length,
        score: scoreLabel.value
      })
    })
  })

  keyDown('left', () => {
    player.move(-MOVE_SPEED, 0)
  })

  keyDown('right', () => {
    player.move(MOVE_SPEED, 0)
  })

  player.action(() => {
    if(player.grounded()) {
      isJumping = false
    }
  })

  keyPress('space', () => {
    if (player.grounded()) {
      isJumping = true
      player.jump(CURRENT_JUMP_FORCE)
    }
  })
})


scene('lose', ({ score }) => {
  add([text(score, 32), origin('center'), pos(width()/2, height()/ 2)])
})

start("game", { level: 0, score: 0})
