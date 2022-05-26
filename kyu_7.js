// Chain me / 7 kyu

function chain(input, fs){
    let result = input
    for(let i in fs){
        result = fs[i](result)
    }
    return result;
}

// Kata.getMiddle("testing") should return "t"

const getMiddle = (s) => {
    let arr = s.split('')
    let i = arr.length / 2
    return (s.split('').length % 2 === 0 ? arr.slice(i-1, i+1) : arr.slice(i, i+1)).join('')
}

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
//
// Our deck (is preloaded):
//
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
    var cardSpilied = card.split('')
    if (cardSpilied.includes('♣'))
          return 'clubs'
      if (cardSpilied.includes('♦'))
          return 'diamonds'
      if (cardSpilied.includes('♥'))
          return 'hearts'
      if (cardSpilied.includes('♠'))
          return 'spades'
  }