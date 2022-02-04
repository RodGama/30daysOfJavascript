let theirAge = Number(prompt("Enter your age"));
let response = theirAge > 18 ? "You are old enough to drive" : `You are left with ${18-theirAge} years to drive.`;
window.alert(`You are ${theirAge}. ${response}`);

let myAge = 27;
let yourAge = Number(prompt("Enter your age"));
let newerOrOlder = myAge > yourAge ? `I am ${Math.abs(yourAge-myAge)} years older than you.` : `You are ${Math.abs(yourAge-myAge)} years older than me.`;
window.alert(`${newerOrOlder}`);

let a = 4;
let b = 3;
if (a > b)
    console.log(`${a} is greater than ${b}`);
else
    console.log(`${a} is less than ${b}`);
console.log(a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`);

let oddOrEven = Number(prompt("Enter a number"));
window.alert(oddOrEven % 2 == 0 ? `${oddOrEven} is an even number` : `${oddOrEven} is an odd number`);

let grade = Number(prompt("Enter your grade"));

switch(true){
    case grade > 79:
    window.alert("A");
    break;

    case grade>69:
    window.alert("B");
    break;

    case grade>59:
    window.alert("C");
    break;

    case grade>49:
    window.alert("D");
    break;

    case grade>=0:
    window.alert("F");
    break;
}

let monthPrompt = prompt("enter month");
let month = monthPrompt.toLowerCase();
switch (month) {
    case "september":
    case "october":
    case "November":
        window.alert("the season is Autumn");
        break;
    case "december":
    case "january":
    case "febuary":
        window.alert("the season is Winter");
        break;
    case "march":
    case "april":
    case "may":
        window.alert("the season is Spring");
        break;
    case "june":
    case "july":
    case "august":
        window.alert("the season is Summer");
        break;
    default:
        window.alert("invalid Month")
}

let dayPrompt = prompt("What is the day today?");
let day = dayPrompt.toLowerCase();
switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thrusday":
    case "friday":
        window.alert(`${day} is a working day`);
        break;
    case "saturday":
    case "sunday":
        window.alert(`${day} is a weekend`);
        break;
    default:
        window.alert(`${day} is a invalid day`);
}

let monthDaysPrompt = prompt("Enter a month");
let monthDays = monthDaysPrompt.toLowerCase();
switch (monthDays) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        window.alert(`${monthDays} has 31 days`);
        break;
    case "april":
    case "june":
    case "september":
    case "november":
            window.alert(`${monthDays} has 30 days`);
        break;
       case "february":
        window.alert(`${monthDays} has 28 days`);
        break;
    default:
        window.alert(`${monthDays} is a invalid month`);
}

monthDaysPrompt = prompt("Enter a month (leap year)");
monthDays = monthDaysPrompt.toLowerCase();
switch (monthDays) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        window.alert(`${monthDays} has 31 days`);
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        window.alert(`${monthDays} has 30 days`);
        break;
    case "february":
        window.alert(`${monthDays} has 29 days`);
        break;
    default:
        window.alert(`${monthDays} is a invalid month`);
}