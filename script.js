// Declare the arrays to be used

let pattern = []
let playerPattern = []
let board = document.querySelectorAll('.box')
let score = 0
let wrongMove = 0

// Have JS generate random numbers from 1 to 6

const generateRandom = () => {
  let num = Math.floor(Math.random() * 6)
  pattern.push(num)
}

// Add a function to light up parts of the board

// generateRandom()
// generateRandom()
// generateRandom()
// generateRandom()

const blink = () => {
  setTimeout(() => {
    for (let i = 0; i < pattern.length; i++) {
      setTimeout(() => {
        document.querySelectorAll('.box')[pattern[i]].classList.add('black')
        setTimeout(() => {
          if (
            document
              .querySelectorAll('.box')
              [pattern[i]].classList.contains('black')
          ) {
            document
              .querySelectorAll('.box')
              [pattern[i]].classList.remove('black')
          }
        }, 500)
      }, i * 1500)
    }
  }, 500)
}

// Stack overflow https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop

// Have the player select one of the squares

const checkPattern = () => {
  for (let i = 0; i < board.length; i++) {
    if (playerPattern[i] !== pattern[i]) {
      wrongMove = wrongMove + 1
    } else {
      console.log('correct')
    }
  }
  console.log('wrong move')
}

// const rmClass=(i)=>{
//   (let i = 0; i < board.length; i++)
//     document
//       .querySelectorAll('.box')
//       [pattern[i]].classList.contains('black')
//   ) {
//     document
//       .querySelectorAll('.box')
//       [pattern[i]].classList.remove('black')
//   }
// }

const rmClass = () => {
  for (let i = 0; i < board.length; i++) {
    if (document.querySelectorAll('.box')[i].classList.contains('black')) {
      document.querySelectorAll('.box')[i].classList.remove('black')
    }
  }
}
const playerSelect = () => {
  let move = pattern.length
  let j = 0
  for (let i = 0; i < board.length; i++) {
    board[i].addEventListener('click', () => {
      if (j < move) {
        board[i].classList.add('black')
        playerPattern.push(parseInt(board[i].innerHTML) - 1)
        j = j + 1
        console.log(playerPattern)
        setTimeout(() => {
          rmClass()
        }, 350)
      }
      checkPattern()
    })
  }
}

generateRandom()
blink()
playerSelect()
checkPattern()

// const blink = () => {
//   setTimeout(() => {
//     for (let i = 0; i < pattern.length; i++) {
//       setTimeout(function timer() {
//         document.querySelectorAll('.box')[pattern[i]].classList.remove('black')
//         setTimeout(() => {
//           if (!board[i].classList.contains('black')) {
//             board[i].classList.add('black')
//           }
//         }, 1500)
//       }, i * 2000)
//     }
//   }, 500)
// }

// const attBlink = () => {
//   for (let i = 0; i < board.length; i++) {
//     board[i].addEventListener('click', () => {
//       document.querySelectorAll('.box')[i].classList.toggle('black')
//     })
//   }
// }
// const selector = () => {
//   for (let i = 0; i < board.length; i++) {
//     board[i].addEventListener('click', () => {
//       playerPattern.push(parseInt(board[i].innerHTML) - 1)
//       checkPattern()
//       console.log(playerPattern)
//       console.log(score)
//     })
//   }
// }
