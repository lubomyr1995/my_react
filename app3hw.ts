// 1) создать интерфейс на основе этого объекта:
// є в інтерфейсі


// // 2) протипизировать функции:
//
// const user: { name: string, age: number, gender: string } = {
//     name: "Max",
//     age: 18,
//     gender: 'male'
// }
//
// //or
// interface IUser {
//     name: string,
//     age: number,
//     gender: string
// }
//
// const user2: IUser = {
//     name: "Max",
//     age: 18,
//     gender: 'male'
// }
//
// const sum = (a: number, b: number): number => {
//     return a + b;
// };
//
// function showSum(a: number, b: number): void {
//     console.log(a + b);
// }
//
// function incAge(someUser: IUser, inc: number): IUser {
//     someUser.age += inc
//     return someUser
// }
//
// console.log(sum(1, 2));
// showSum(2, 3)
// incAge(user, 2)


////////////
type Name = 'Max' | 'Ivan'

interface IUser {
    id?: number,
    name: Name
}

const user0: IUser = {name: 'Ivan'}
const user: Required<IUser> = {id: 1, name: 'Ivan'} // всі поля обвязкові

interface IUser2 extends IUser {
    age: number
}

const user1: IUser2 = {name: 'Max', age: 25}