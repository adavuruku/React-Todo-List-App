let permutated = (string) => {
    console.log(string)
    if (string.length < 2 ){
        console.log('string -> ', string)
        return string
    }
    let permuteValue = []
    
    for(let j = 0; j < string.length; j++){
        let node = string[j]
        if(string.indexOf(node) != j) continue
        let remainChar = string.slice(0,j) + string.slice(j+1, string.length)
        for(let remo of permutated(remainChar)){
            console.log('here')
            permuteValue.push(node + remo)
            console.log('here -> ',permuteValue)
        }
    }
    return permuteValue 
}

console.log(permutated("cot"))

