//==============Sample input==============// 
const vax = [
    {
        name: "Yasin",
        age: 21,
        temperature: 99
    },
    {
        name: "Bappy",
        age: 32,
        temperature: 98
    },
    {
        name: "Asif",
        age: 42,
        temperature: 99
    },
    {
        name: "Islam",
        age: 52,
        temperature: 400
    },
    {
        name: "Akib",
        age: 20,
        temperature: 98
    },
    {
        name: "Sazzad",
        age: 35,
        temperature: 102
    },
    {
        name: "Samy",
        age: 26,
        temperature: 65
    },
    {
        name: "Kaif",
        age: 18,
        temperature: 98
    },
    {
        name: "Tamim",
        age: 14,
        temperature: 100
    },
    {
        name: "Keya",
        age: 33,
        temperature: 96
    },
    {
        name: "Chaity",
        age: 23,
        temperature: 99
    }
];

//==============Function to sort by even ages==============// 
const sortByEvenAge = (arr) => {
    //------first sort the array in ascending order of their age------//
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j].age > arr[j + 1].age) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            };
        }
    }

    //------first sort the array by even age------//
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j].age % 2 > arr[j + 1].age % 2) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr;
}

//==============vaxTrail function==============// 
const vaxTrail = (arr) => {
    const arrayA = arr.filter(obj => obj.age >= 20 && obj.age <= 30 && obj.temperature < 100);
    const sortedArrayA = sortByEvenAge(arrayA);

    const arrayB = arr.filter(obj => obj.age >= 31 && obj.age <= 40 && obj.temperature < 100);
    const sortedArrayB = sortByEvenAge(arrayB);

    const arrayC = arr.filter(obj => obj.age >= 41 && obj.age <= 50 && obj.temperature < 100);
    const sortedArrayC = sortByEvenAge(arrayC);

    const arrayD = arr.filter(obj => obj.temperature >= 100);
    const sortedArrayD = sortByEvenAge(arrayD);

    const finalResult = {
        A: sortedArrayA,
        B: sortedArrayB,
        C: sortedArrayC,
        D: sortedArrayD
    }
    return finalResult
}

console.log(vaxTrail(vax));


