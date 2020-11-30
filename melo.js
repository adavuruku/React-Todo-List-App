let permutated = (string) => {
    // console.log(string)
    if (string.length < 2 ){
        return string
      }
    let permuteValue = []
    for(let j = 0; j < string.length; j++){
        let node = string[j]
        if(string.indexOf(node) != j) continue
        let remainChar = string.slice(0,j) + string.slice(j+1, string.length)
        console.log(remainChar)
        for(let remo of permutated(remainChar)){
            permuteValue.push(node + remo)
        }
    }
    return permuteValue 
}

console.log(permutated("football"))

