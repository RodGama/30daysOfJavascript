//exercicio 1
const newArray = []; //1

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];//2
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
]; //2
console.log(newArray.length);//3
console.log(webTechs[0], webTechs[(Math.floor(webTechs.length / 2))], webTechs[webTechs.length - 1]);//4

const mixedDataTypes = ["teste", true, 1, 1.5, webTechs, undefined];//5
console.log(mixedDataTypes.length);//5

var itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
];//6
console.log(itCompanies);//7
console.log(itCompanies.length);//8
console.log(itCompanies[0], itCompanies[(Math.floor(itCompanies.length / 2))], itCompanies[itCompanies.length - 1]);//9
itCompanies.forEach(company => {
    console.log(company);
});//10
itCompanies.forEach(company => {
    company = company.toUpperCase();
    console.log(company);
});//11
var message = itCompanies.join(", ");//12
var r = message.substring(message.lastIndexOf(","));//12
message = message.replace(r," and "+itCompanies[itCompanies.length - 1]);//12
console.log(message +" are big IT companies");//12