//Kaboom version 0.5.0 needs to be in use for this game by adding the correct script tag in the HTML file.

kaboom({
  global: true,
  fullscreen: true,
  scale: 2,
  debug: true,
  clearColor: [0, 0, 0, 1],
})

// Speed identifiers
const MOVE_SPEED = 130
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
      '                                                                                                                                                                                                                                                                                                                                                                   ',
      '                                                                                                                                                                                                                                                                                                                                                                   ',
      '                                                                                                                                                                                                                                                                                                                                                                   ',
      '                                                                                                                                                                                                                                                                                                                                                                   ',
      '                                                                                                                                                                                                                                                                                                                                                                   ',
      '     %   =*=%=                                       =*=%=                                                                                                                                                                                                                                                                                                         ',
      '                            -+                                                                                                                                                                                                                                                                                                                                   +-',
      '                            ()                                    -+                    -+                         -+                            -+                  +-                  +-                   +-                          +-                      +-                  +-                +-                           +-                          ()',
      '                            ()                                    ()                    ()                         ()                            ()                  ()                  ()                   ()                          ()                      ()                  ()                ()                           ()                          ()',
      '==============================   ===================================   ===================   ========================   ===========================   =================   =================    =================    ========================   =====================  ==================  ================  ===========================  ==========================',
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
add([text(' You need to play the game \n \n and move forward in order \n \n to read it all :) '  ), pos(40, 250)])
add([text('Git repertory creation \n Unit tests creation with JUnit \n Code quality testing with Sonar \nProject versions continuous upload with Nexus (Artifacts) \n Spring boot application image\n push on Docker hub\n Complete DEVOPS chain launch with\n Jenkins on a Git Push \n An email is sent on a Jenkins build failure  \n Docker containers test with Postman.'),pos(550,25)])
add( [text(' Uesd tools:\n Sts, Sonar, Nexus,Docker, Jenkins, Postman \n\n Technologies: \n Git, Spring Boot, MySQL'),pos(680,250)])
add([text(' University Projects'  ), pos(500, 250)])  
add([text(' FC Kindergarten: \n \n A parent is able to add a post, \n edit it and delete it.\n A parent is able to add a comment, \n edit it and delete it. \n A parent can like or dislike a post \n A parent can like or dislike a comment\n Creation of unaccapted words dictionnary \n Parents can send and recieve textual messages \n ( made in plain JAVA)\n '), pos(1310,25)])
add( [text('Used tools: \n Sts, VSCode, Postman \n\n Technologies: \n Html5, CSS3, Typescript,Bootstrap \n , Angular9, Java , Spring Boot, Hibernate(ORM) \n , SQL, JPQL MySQL, Git'),pos(1310,250)])
add([text(' Personal \n project'  ), pos(1750, 250)])  
add([text(' Super Mario CV: \n \n Create super mario game CV: \n \n Sprites are loaded from an external website \n Followed super mario scenario with observable changes \n The player is able to read my resume \n while advancing in the game\n'), pos(1750,25)])
add( [text(' Used tools:\n VSCode \n\n Technologies: \n Html5, Javascript, Kaboom \n '),pos(1860,250)])

add([text(' Sowtare Engineering degree \n \n  Esprit (2019 -2022)'), pos(2300, 25)])
 add([text(' International trade master degree : \n \n first year \n \n Essect ( 2014 -2015)'), pos(2890,25)])
  add([text(' International economics and finance \n bachelor degree \n \n international trade specialty : \n \n  Essect ( 2011 -2014)'), pos(3300,25)])
add([text(' Education'  ), pos(2300, 250)])
add([text(' Experience '  ), pos(3700, 250)])
 add([text(' IT technical support : \n \n The Hive, MARCH 2019 - JUNE 2021 \n \n Troubleshooting and resolving various technical \n issues of our customers.\n \n Database opeartions such as search, add, update.. \n \n \n \n API testing with Postman'  ), pos(3700, 25)])
 add([text(' Client advisor : \n \n CONVERGYS, OCTOBRE 2018 - FEBRUARY 2019 \n \n Management of customer complaints \n \n Technical and commercial support'), pos(4100,25)])
  add([text(' Community Manager : \n \n RENAUD CONSULTING, APRIL 2018, JUNE 2018 \n \n FB ads \n \n Web/Social networks editor'), pos(4700,50)])
 add([text(' Designer \n \n FIVERR, 2017 \n \n Social media banners design \n \Video editor'), pos(5230,50)])
  add([text('YouthAct & Active Citizens facilitator : \n \n JASMINE FOUNDATION/ BRTISH COUNCIL, \n \n OCTOBER 2015 - DECEMBER 2017 \n \n Constitution and management of participants group \n\n Study and implementation of regional projects '), pos(6000,25)])
  add([text('Treasurer and founding member \n \n ATCV, JULY 2014 - JULY 2017 \n \n planning and monitoring of the budget plan \n \n Management of internal and external financial relations'), pos(6600,25)])
  //add([text(' Experience '  ), pos(2300, 250)])
  add([text('Civil society'), pos(5600,250)])
 add([text(' Hope you liked \n \n this trip :) '), pos( 7100,250)])
  
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
