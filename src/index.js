module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
    ];
    const tenns = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number < 11) {
        return units[number];
    } else if (number > 10 && number < 20) return tenns[(number % 10) - 1];
    else if (number > 19 && number < 100) {
        let dozPart = dozens[Math.floor(number / 10) - 2];
        if (number % 10 === 0) {
            return dozPart;
        } else {
            let unitPart = units[number % 10];
            let finTenns = dozPart + " " + unitPart;

            return finTenns;
        }
    } else if (number > 99 && number < 1000) {
        if (number % 100 === 0) {
            return units[number / 100] + " hundred";
        } else {
            let hundred = units[Math.floor(number / 100)];

            let newHundred = number - Math.floor(number / 100) * 100;
            if (newHundred < 11) {
                return hundred + " hundred " + units[newHundred];
            } else {
                if (newHundred > 10 && newHundred < 20) {
                    return hundred + " hundred " + tenns[(newHundred % 10) - 1];
                } else {
                    let dozPart = dozens[Math.floor(newHundred / 10) - 2];
                    if (newHundred % 10 === 0) {
                        return hundred + " hundred " + dozPart;
                    } else {
                        let unitPart = units[newHundred % 10];
                        let finTenns = dozPart + " " + unitPart;

                        return hundred + " hundred " + finTenns;
                    }
                }
            }
        }
    }
};
// const units = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//     "ten",
// ];
// const tenns = [
//     "eleven",
//     "twelve",
//     "thirteen",
//     "fourteen",
//     "fifteen",
//     "sixteen",
//     "seventeen",
//     "eighteen",
//     "nineteen",
// ];
// const dozens = [
//     "twenty",
//     "thirty",
//     "forty",
//     "fifty",
//     "sixty",
//     "seventy",
//     "eighty",
//     "ninety",
// ];
// const humanRead = (number) => {
//     if (number < 11) {
//         return units[number];
//     } else if (number > 10 && number < 20) return tenns[(number % 10) - 1];
//     else if (number > 19 && number < 100) {
//         let dozPart = dozens[Math.floor(number / 10) - 2];
//         if (number % 10 === 0) {
//             return dozPart;
//         } else {
//             let unitPart = units[number % 10];
//             let finTenns = dozPart + " " + unitPart;

//             return finTenns;
//         }
//     } else if (number > 99 && number < 1000) {
//         if (number % 100 === 0) {
//             return units[number / 100] + " hundred";
//         } else {
//             let hundred = units[Math.floor(number / 100)];

//             let newHundred = number - Math.floor(number / 100) * 100;
//             if (newHundred < 11) {
//                 return hundred + " hundred " + units[newHundred];
//             } else {
//                 if (newHundred > 10 && newHundred < 20) {
//                     return hundred + " hundred " + tenns[(newHundred % 10) - 1];
//                 } else {
//                     let dozPart = dozens[Math.floor(newHundred / 10) - 2];
//                     if (newHundred % 10 === 0) {
//                         return hundred + " hundred " + dozPart;
//                     } else {
//                         let unitPart = units[newHundred % 10];
//                         let finTenns = dozPart + " " + unitPart;

//                         return hundred + " hundred " + finTenns;
//                     }
//                 }
//             }
//         }
//     }
// };
// console.log(humanRead(506));
