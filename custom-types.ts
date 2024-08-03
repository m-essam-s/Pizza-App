type Address = {
    street: string,
    city: string,
    country: string,
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address, // '?' makes it optional property 
}

let person_1: Person = {
    name: "Joe",
    age: 20,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA",
    }

}

let person_2: Person = {
    name: "Joe",
    age: 30,
    isStudent: false,
}

function displayInfo(person: Person){
    console.log(`${person.name} lives at ${person.address?.street}`)
}

let peaple: Person[] = [
    person_1,
]

displayInfo(person_1)
