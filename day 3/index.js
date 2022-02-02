let firstName = 'Rodrigo'; // 1
        let lastName = 'Lima'; // 1
        let country = 'Brasil'; // 1
        let city = 'Rio de Janeiro'; // 1
        let age = 27; // 1
        let isMarried = false; // 1
        let year = new Date().getFullYear(); // 1
        console.log(typeof (firstName), typeof (lastName), typeof (country), typeof (city), typeof (age), typeof (
            isMarried), typeof (year)); //1

        console.log(typeof ('10') == 10); // 2

        console.log(Math.round(parseInt('9.8')) == 10); // 3

        console.log(10 > 1); // 4 i
        console.log(0 < 1); // 4 i
        console.log(typeof ('js') == 'string'); // 4 i

        console.log(10 < 1); // 4 ii
        console.log(0 > 1); // 4 ii
        console.log(typeof (String) == 10); // 4 ii

        /* 
        4 > 3 --> true
         4 >= 3 --> true
         4 < 3 --> false
         4 <= 3 --> false
         4 == 4 --> true
         4 === 4 --> true
         4 != 4 --> false
         4 !== 4 --> false
         4 != '4' --> false
         4 == '4' --> true
         4 === '4' --> false
         Find the length of python and jargon and make a falsy comparison statement.
         */
        console.log(4 > 3); // 5
        console.log(4 >= 3); // 5
        console.log(4 < 3); // 5
        console.log(4 <= 3); // 5
        console.log(4 == 4); // 5
        console.log(4 === 4); // 5
        console.log(4 != 4); // 5
        console.log(4 !== 4); // 5
        console.log(4 != '4'); // 5
        console.log(4 == '4'); // 5
        console.log(4 === '4'); // 5
        console.log('python'.length != 'jargon'.length); // 5
        /*
        4 > 3 && 10 < 12 --> true
        4 > 3 && 10 > 12 --> false
        4 > 3 || 10 < 12 --> true
        4 > 3 || 10 > 12 --> true
        !(4 > 3) --> false
        !(4 < 3) --> true
        !(false) --> true
        !(4 > 3 && 10 < 12) -->false
        !(4 > 3 && 10 > 12) --> true
        !(4 === '4') --> true
        There is no 'on' in both dragon and python // false
        */
        console.log(4 > 3 && 10 < 12); // 6
        console.log(4 > 3 && 10 > 12); // 6
        console.log(4 > 3 || 10 < 12); // 6
        console.log(4 > 3 || 10 > 12); // 6
        console.log(!(4 > 3)); // 6
        console.log(!(4 < 3)); // 6
        console.log(!(false)); // 6
        console.log(!(4 > 3 && 10 < 12)); // 6
        console.log(!(4 > 3 && 10 > 12)); // 6
        console.log(!(4 === '4')); // 6
        console.log(!('dragon'.includes('on') && 'python'.includes('on'))); // 6

        let today = new Date();
        const date70 = new Date(1970, 1, 1);
        console.log(today.getFullYear()); //7
        console.log(today.getMonth() + 1); //7
        console.log(today.toLocaleDateString()); //7
        console.log(today.getDay()); //7
        console.log(today.getHours()); //7
        console.log(today.getMinutes()); //7
        console.log(today - date70); //7

        let base = prompt("Enter base");
        let height = prompt("Enter height");
        window.alert("The area of the triangle is " + 0.5 * base * height)

        let sideA = Number(prompt("Enter side a"));
        let sideB = Number(prompt("Enter side b"));
        let sideC = Number(prompt("Enter side c"));
        window.alert("The perimeter of the triangle " + (sideA + sideB + sideC));

        let lenghtRect = Number(prompt("Enter length"));
        let widthRect = Number(prompt("Enter width"));
        window.alert("The perimeter of the rectangle is " + (perimeter = 2 * (lenghtRect + widthRect)));
        window.alert("The area of the rectangle is " + (lenghtRect * widthRect));
        const PI = 3.14

        let radiusC1 = Number(prompt("Enter radius"));
        window.alert("The area of the circle is " + (PI * radiusC1 * radiusC1) + " while the circumference is " + (PI *
            2 * radiusC1));

        let hours = Number(prompt("Enter hours"));
        let rate = Number(prompt("Enter rate per hour"));
        window.alert('Your weekly earning is' + (hours * rate));

        if (firstName.length > 7)
            console.log("your name is long");
        else
            console.log("your name is short");

        let longerOrShorter = (firstName.length) > (lastName.length) ? "longer" : "shorter";
        console.log(`Your first name, ${firstName} is ${longerOrShorter} than your family name, ${lastName}`);

        let myAge = 27;
        let yourAge = 55;
        let newerOrOlder = myAge > yourAge ? "older" : "newer";
        console.log(`I am ${Math.abs(yourAge-myAge)} years ${newerOrOlder} than you.`);

        let birthYear = Number(prompt("Enter birth year"));
        let theirAge = today.getFullYear() - birthYear;
        let response = theirAge > 18 ? "You are old enough to drive" : `You will be allowed to drive after ${18-theirAge} years.`;
        window.alert(`You are ${theirAge}. ${response}`);

        let secondsInDay = 60 * 60 * 24;
        let secondsInYear = secondsInDay * 365;
        let yearsLive = Number(prompt("Enter number of years you live"));
        let secondsOld = yearsLive * secondsInYear;
        window.alert(`You lived ${secondsOld} seconds.`)

        console.log(
            `${today.getFullYear()}-${today.getMonth()+1>9 ? today.getMonth()+1: `0${today.getMonth()+1}`}-${today.getDate()>9 ? today.getDate(): `0${today.getDate()}`} ${today.getHours()}:${today.getMinutes()}`
        );
        console.log(
            `${today.getDate()>9 ? today.getDate(): `0${today.getDate()}`}-${today.getMonth()+1>9 ? today.getMonth()+1: `0${today.getMonth()+1}`}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`
        );
        console.log(
            `${today.getDate()>9 ? today.getDate(): `0${today.getDate()}`}/${today.getMonth()+1>9 ? today.getMonth()+1: `0${today.getMonth()+1}`}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`
        );

        console.log(
            `${today.getFullYear()}-${today.getMonth()+1>9 ? today.getMonth()+1: `0${today.getMonth()+1}`}-${today.getDate()>9 ? today.getDate(): `0${today.getDate()}`} ${today.getHours()>9?today.getHours():`0${today.getHours()}`}:${today.getMinutes()>9?today.getMinutes():`0${today.getMinutes()}`}`
        );