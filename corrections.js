// Write a function that takes in a string and returns it when reversed
const reverseString = (string) => {
    let stringArr = string.split('')
    let reversed = stringArr.reverse()
    return  console.log(reversed.join(''))
}
let food = 'eating'
reverseString(food)

// 2. Write a function that takes in the following array and consoles the target if it is found else
// null

const findsTarget = (array, target) => {
    for(let num = 0; num < array.length; num++){
        if(array[num] ===  target){
            return target
        }
    }
return null
}
let num = [2,8,0,23,5,45,76]
let Target = 23
console.log(findsTarget(num,Target))

// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
const findsLeapYear = (years) => {
    years.forEach(year => {
        if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
            console.log(`${year} is a leap year`)
        }
        else{
            console.log(`${year} is not a leap year`)
        }
    });
}

let allYears = [2000,2001,2002,2003,2004,2005,2006,2007,2008,
    2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023]
findsLeapYear(allYears)

// 4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for(let num = 0; num <= 100; num++){
    if(num % 3 === 0 && num % 5 === 0) console.log(`${num} FizzBuzz`)
    else if(num % 3 === 0) console.log(`${num} Fizz`)
    else if(num % 5 === 0) console.log(`${num} Buzz`)
    else console.log(`${num}`)
}
//5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
const multiplication = (numArrs) => {
    let prodArr = []
    for(let num = 0; num < numArrs.length; num++){
        prodArr.push(numArrs[num] * 4)
    }
    return prodArr
}
let numArray = [12,87,45,75,23,64,73]
console.log(multiplication(numArray))
// 6. Write a function that takes in an array of strings and returns an array with every element
// turned into a number

let nums = ['10','24','45','56','67']
const turnsIntoNum = (arrStrings) => {
    let emptyArr = []
    for(let i = 0; i < arrStrings.length; i++){
       let newStr = parseInt(arrStrings[i])
        emptyArr.push(newStr)
    }
    console.log(emptyArr)
}
turnsIntoNum(nums)