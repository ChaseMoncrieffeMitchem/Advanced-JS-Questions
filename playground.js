const str = "Simplified !"

const charMap = {}

for (let char of str) {
    if (!charMap[char]) {
        charMap[char] = 1
    }
    else {
        charMap[char] = charMap[char] + 1
    }
}

console.log(charMap)