import cloud from '../img/Single_Cloud.png'
import platform from '../img/Floor_Background.png'
import sky from '../img/Sky_Background.png'
import cloud2 from '../img/Sky2.png'
import building from '../img/State_Farm.png'
import dog_door from '../img/Pet_Door.png'
import boat_door from '../img/Boat_Door.png'
import jake from '../img/Jake_Standing.png'
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 0.5
class Player{
    constructor(){
        this.position = {
            x:50,
            y:100
        }
        this.velocity = {
            x:0,
            y:1
        }
        this.width = 250
        this.height = 200

        this.image = createImage(jake)
     }
        draw(){
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
            
            
    }
    
    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
        else this.velocity.y = 0
    }

}

//ORIGINAL

class Platform {
    constructor({x, y, image}){
        this.position = {
            x:x,
            y:y
        }
        this.image = image
        this.width= image.width
        this.height= image.height
        
    }
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}



// COPY

class GenericObject{
  constructor({x, y, image}){
      this.position = {
          x:x,
          y:y
      }
      this.image = image
      this.width= image.width
      this.height= image.height
      
  }
  draw(){
      c.drawImage(this.image, this.position.x, this.position.y)
  }
}

class Doors {
  constructor({x,y, image}){
    this.position ={
      x: x,
      y: y,
    }
    this.image = image
    this.width = image.width
    this.height = image.height
  }
  draw()
  {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}


// ORIGINAL

function createImage(imageSrc)
{
  const image = new Image()
  image.src = imageSrc
  return image
}

const platformImage = createImage(platform)

const player = new Player()
//const platform = new Platform()
const platforms = [
  new Platform({
    x:-1, 
    y:700, 
    image: platformImage
  }), 
  new Platform({x: platformImage.width-1, y:700,image: platformImage}), new Platform({x: 0, y:700,image: platformImage}),
  new Platform({x: 700, y:-900,image: createImage(building)})
]

const dogDoor = [
  new Doors({
    x:-800,
    y:-785,
    image: createImage(dog_door)
  }),
  new Doors({
    x:-200,
    y:-785,
    image: createImage(boat_door)
  }),
]

const genericObjects = [
  new GenericObject({
    x:0,
    y:0,
    image: createImage(sky)
  }),
  new GenericObject({
    x: createImage(sky).width-1,
    y:0,
    image: createImage(sky)
  }),
  new GenericObject({
    x:0,
    y:-500,
    image: createImage(cloud)
  }),
  new GenericObject({
    x:-800,
    y:-500,
    image: createImage(cloud)
  }),
  new GenericObject({
    x:-1200,
    y:-450,
    image: createImage(cloud2)
  }),
  new GenericObject({
    x:-500,
    y:-400,
    image: createImage(cloud2)
  })
  // new GenericObject({
  //   x:-800,
  //   y:-785,
  //   image: createImage(dog_door)
  // }),
  // new GenericObject({
  //   x:-200,
  //   y:-785,
  //   image: createImage(boat_door)
  // }),
]

const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

let scrollOffset = 0

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle='white'
    c.clearRect(0, 0, canvas.width, canvas.height)
  
    genericObjects.forEach(genericObject =>{
        genericObject.draw()
    })
    platforms.forEach(platform => {
        platform.draw()
    })
    dogDoor.forEach(Doors =>{
        Doors.draw()
    })
    player.update()
 

    if (keys.right.pressed && player.position.x < 1100) {
        player.velocity.x = 5
    }else if ((keys.left.pressed && player.position.x > 100) || (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)) {
        player.velocity.x = -5
    }else {
        player.velocity.x = 0
        if (keys.right.pressed)
        {
            scrollOffset +=5
            platforms.forEach(platform => {
                platform.position.x -= 5
            })
            genericObjects.forEach(genericObject => {
              genericObject.position.x -= 3
            })
            dogDoor.forEach(Doors => {
              Doors.position.x -= 5
            })
            
        }else if (keys.left.pressed && scrollOffset > 0){
          scrollOffset -=5
            platforms.forEach(platform => {
                platform.position.x +=5
            })
            genericObjects.forEach(genericObject => {
              genericObject.position.x += 3
            })
            dogDoor.forEach(Doors => {
              Doors.position.x += 5
            })
            
        }
    }



    //Detect collusion with cloud (blue rectangle)
    platforms.forEach(platform => {
    
        if(player.position.y+player.height <= platform.position.y && player.position.y + player.height + 
            player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x +platform.width)
        {
            player.velocity.y = 0 
        }
    })
}


animate()

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = true
            break

        case 83:
            console.log('down')
            break

        case 68:
            console.log('right')
            keys.right.pressed = true
            break
        case 87:
            console.log('up')
            player.velocity.y -= 10
            if(player.position.x > 520 && player.position.x <670)
            {
              window.location.href = "https://statefarm-insurance.web.app/"
            }
            if(player.position.x > 970 && player.position.x <1100)
            {
              window.location.href = "https://statefarm-insurance-93b6e.web.app/"
            }

            break

    }
})

addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = false
            break

        case 83:
            console.log('down')
            break

        case 68:
            console.log('right')
            keys.right.pressed = false
            break

        case 87:
            console.log('up')
            keys.right.pressed = false
            break
    }
})
