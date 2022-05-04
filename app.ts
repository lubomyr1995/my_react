// const show = (a: string[]): string => {
//     return 'd'
// };
//
// const show2 = (a: number, b: number): void => {
//
// };
//
// const show3 = (a): number | string => {
//     return '3d' + 3
// };
// const user: { name: string, age: number } = {age: 25, name: 'Ivan'};
//
// const showUser = (user: { name: string, age: number }): void => {
//     user
// }
// console.log(user)

// //****
// interface IUser {
//     id: number,
//     name: string,
//     age: number
// }
//
// const showUser = (user: IUser) => {
//
// };
// showUser({id: 5, age: 25, name: 'yilik'});
//
// interface INuser<T> {
//     id: number,
//     arr: T[]   // означає масив чогось
// }
//
// const userr: INuser<string> = {id: 1, arr: ['1']}
//
//
// type stateType = [string, (a: number, b: number) => number]
// const state: stateType = ['assa', (a25, b21) => {
//     return 35
// }]
//
// class User { // privat приватний) readonly не можна змінювати) protected доступнийв тільки в класі і нащадкам
//     constructor(protected id: number, private readonly name: string, private age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//
//     getId(): number {
//         return this.id
//     }
//
//     setId(newId: number): void {
//         this.id = newId
//     }
// }
//
// const user1 = new User(2, 'as', 25);

///
interface IMyShape {
    area: () => number;
    perimeter: () => number;
}

class Triangle implements IMyShape {
    constructor(private a: number, private b: number, private c: number) {
    }

    area(): number {
        const p = (this.a + this.b + this.c) / 2
        return Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c)))
    }

    perimeter(): number {
        return this.a + this.b + this.c;
    }
}

const shapes: IMyShape[] = [new Triangle(3, 4, 5), new Triangle(6, 8, 10)]
for (const shape of shapes) {
    console.log(shape.area())
    console.log(shape.perimeter())
}