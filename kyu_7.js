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