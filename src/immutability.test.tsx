import {
    addNewBooks,
    increaseAge,
    makeHairStyle,
    moveUser, updateBook,
    upgradeUserLaptop,
    UserType,
    UserWithBooks,
    UserWithLaptop
} from './immutability';



test ('increaseAge should be correct',()=>{
    let user:UserType={
        name:'Ilya',
        hair:32,
        age:26,
        address:{
            city:'St-Petersburg',
            house:12
        }
    }
    increaseAge(user)

    expect(user.age).toBe(27)

})


test (' should be correct',()=>{
    let user:UserType={
        name:'Ilya',
        age:26,
        hair: 32,
        address:{
            city:'St-Petersburg',
            house:12
        }
    }
    let awesomeUser=makeHairStyle(user,2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)

})

test ('change address',()=>{
    let user:UserWithLaptop={
        name:'Ilya',
        age:26,
        hair: 32,
        address:{
            city:'St-Petersburg',
            house:12
        },
        laptop:{
            title:'ZenBook'
        }
    }
    let movedUser=moveUser(user,'Kiev')


    expect(movedUser).not.toBe(user)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Kiev')
    expect(user.laptop).toBe(movedUser.laptop)


})


test ('update laptop to macbook',()=>{
    let user:UserWithLaptop={
        name:'Ilya',
        age:26,
        hair: 32,
        address:{
            city:'St-Petersburg',
            house:12
        },
        laptop:{
            title:'ZenBook'
        }
    }
    let upgradedUserLaptop=upgradeUserLaptop(user,'Macbook')


    expect(upgradedUserLaptop).not.toBe(user)
    expect(user.laptop).not.toBe(upgradedUserLaptop.laptop)
    expect(upgradedUserLaptop.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')



})
test ('add books',()=>{
    let user:UserWithLaptop&UserWithBooks={
        name:'Ilya',
        age:26,
        hair: 32,
        address:{
            city:'St-Petersburg',
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        books:['react','js','html','css']
    }
    let upgradedUserBooks=addNewBooks(user,'ts')



    expect(upgradedUserBooks).not.toBe(user)
    expect(user.laptop).toBe(upgradedUserBooks.laptop)
    expect(upgradedUserBooks.books.length).toBe(5)




})

test ('change books',()=>{
    let user:UserWithLaptop&UserWithBooks={
        name:'Ilya',
        age:26,
        hair: 32,
        address:{
            city:'St-Petersburg',
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        books:['react','js','html','css']
    }
    let upgradedUserBooks=updateBook(user,'js','ts')



    expect(upgradedUserBooks).not.toBe(user)
    expect(user.laptop).toBe(upgradedUserBooks.laptop)
    expect(upgradedUserBooks.books[1]).toBe('ts')




})

test ('change books',()=>{
    let user:UserWithLaptop&UserWithBooks={
        name:'Ilya',
        age:26,
        hair: 32,
        address:{
            city:'St-Petersburg',
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        books:['react','js','html','css']
    }
    let upgradedUserBooks=updateBook(user,'js','ts')



    expect(upgradedUserBooks).not.toBe(user)
    expect(user.laptop).toBe(upgradedUserBooks.laptop)
    expect(upgradedUserBooks.books[1]).toBe('ts')




})
