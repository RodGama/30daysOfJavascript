let challenge = '30 Days Of JavaScript'; // 1
console.log(challenge); // 2
console.log(challenge.length); // 3
console.log(challenge.toUpperCase()); // 4
console.log(challenge.toLowerCase()); // 5
console.log(challenge.substr(challenge.indexOf('3'), 2)); // 6
console.log(challenge.substr(challenge.indexOf('D'))); // 7
console.log(challenge.includes("Script")); // 8
console.log(challenge.split("")); // 9
console.log(challenge.split(" ")); // 10
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(",")); // 11
console.log(challenge.replace("JavaScript", "Python")); // 12
console.log(challenge.charAt(15)); // 13
console.log(challenge.charCodeAt(challenge.indexOf('J'))); // 14
console.log(challenge.indexOf('30 Days Of JavaScript')); // 15
console.log(challenge.lastIndexOf('30 Days Of JavaScript')); // 16
console.log("You cannot end a sentence with because because because is a conjunction".indexOf('because')); // 17
console.log("You cannot end a sentence with because because because is a conjunction".lastIndexOf(
'because')); // 18
console.log("You cannot end a sentence with because because because is a conjunction".search('because')); // 19
console.log(challenge.trim()); // 20
console.log(challenge.startsWith("30")); // 21
console.log(challenge.endsWith("JavaScript")); // 22
console.log(challenge.match(/a/gi)); // 23
console.log("".concat("30 Days of ", "JavaScript")); // 24
console.log(challenge.repeat(2)); // 25
//Exercicio 2

console.log(
    "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
    ); // 1
console.log(
    "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
); // 2
console.log(typeof ('10') == typeof (String(10))); // 0
console.log(Math.round(parseFloat('9.8')) == 10); // 4
console.log('python'.includes('on') == 'jargon'.includes('on')); // 5
console.log('I hope this course is not full of jargon'.includes('jargon')); // 6
console.log(Math.floor(Math.random () * 101)); // 7
console.log(Math.floor(Math.random() * (256 - 49) + 49)); // 0
console.log(Math.floor(Math.random () * 256)); // 9
console.log('JavaScript'[Math.floor(Math.random () * 'JavaScript'.length)]); // 10
console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125'); // 11
let because = 'You cannot end a sentence with because because because is a conjunction';
console.log(because.substr(0, because.indexOf("because")) + because.substr(because.lastIndexOf("because"))); // 12
//Exercicio 3

console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi)); // 1
console.log(because.match(/because/gi)); // 2
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let newSentence = sentence.replace(/[^\w\s]/gi, ''); // 3
console.log(newSentence); // 3 // FALTA

const salary = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'; // 4 
let salaries = salary.match(/\d+/g);  // 4 
let totalAnnualIncome = 0;  // 4 
salaries.forEach(element => {  // 4 
        totalAnnualIncome += Number(element);  // 4 
    })  // 4 
    console.log(totalAnnualIncome // 4 
    ); // 4 