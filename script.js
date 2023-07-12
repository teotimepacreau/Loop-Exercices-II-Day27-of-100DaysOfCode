console.log('connecté !');
//https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/05_Day_Arrays/05_day_arrays.md
// Exercice II

//II.1 Using the above countries array, create the following new array.

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const upperCaseCountries =  countries.map((country)=>{
 return country.toUpperCase()
})
console.log(upperCaseCountries)

// II.2 Using the above countries array, create an array for countries length

const countriesLength = countries.map((country)=>{
  return country.length
})
console.log(countriesLength)

/*II.3 Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]

*/

let arrayOfArrays = countries.map((country) => {
  return [country, country.substring(0, 3).toUpperCase(), country.length];
});

console.log(arrayOfArrays);

//II.4 In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let landArray = []

for(let country of countries){
  if(country.includes('land')){
    landArray.push(country)
  }else{
    console.log(country, 'is a country without land')
  }
}
console.log(landArray)

// II.5 In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let iaCountries = []
for(let country of countries){
  if(country.endsWith('ia')){
    iaCountries.push(country)
  }else{
    console.log(country, 'These are countries ends without ia')
  }
}
console.log(iaCountries)

// II.6 Using the above countries array, find the country containing the biggest number of characters.
let longestCountry = ''
countries.forEach((item)=>{
  if(item.length > longestCountry.length){
    longestCountry = item
  }
})
console.log(longestCountry)

// II.7 Using the above countries array, find the country containing only 5 characters.
let fiveCharactersCountry = []

countries.forEach((item)=>{
  if(item.length == 5){
    fiveCharactersCountry.push(item)
  }
})
console.log(fiveCharactersCountry)

// II.8 Find the longest word in the webTechs array

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

let longestWord = ''

webTechs.forEach((word)=>{
  if(word.length > longestWord.length){
    longestWord = word
  }
})
console.log(longestWord)

// II.9 Use the webTechs array to create the following array of arrays: [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

const webTechArrayOfArrays = webTechs.map((item)=>{
  return [item, item.length]
})
console.log(webTechArrayOfArrays)

// II.10 An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

mernStack = [
  'MongoDB',
  'Express',
  'React',
  'Node'
]
let acronym = ''
mernStack.forEach((item)=>{
  acronym+=item[0]
})
console.log(acronym)

// II.11 Print all the elements of array as shown :   HTML CSS JS REACT NODE EXPRESS MONGODB
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
fullStack.reverse()
const allIn = fullStack.reduce((acc, curr)=>{
  return (curr.join(' ') + acc).toUpperCase()
},'')
console.log(allIn)