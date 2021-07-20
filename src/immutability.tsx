export type UserType = {
    name: string
    age: number
    address: { city: string, house: number }
    hair: number

}
export type LaptopType = {
    title: string
}
export type UserWithLaptop = UserType & {
    laptop: LaptopType
}
export type UserWithBooks = UserType & {
    books:Array<string>
}


export function increaseAge(u: UserType) {
    u.age += 1;
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power,

    };

    return copy;
}

export function moveUser(u: UserWithLaptop, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    };


}

export function upgradeUserLaptop(u: UserWithLaptop, newLaptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: newLaptop
        }
    };


}

export function addNewBooks(u: UserWithLaptop&UserWithBooks, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]

    }


}
export function updateBook(u: UserWithLaptop&UserWithBooks,oldBook:string, newBook: string) {
    return {
        ...u,
        books: [...u.books.map(b=>b===oldBook?newBook:b)]

    }


}