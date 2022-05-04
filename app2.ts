import {usersService} from "./services";
import {MyEnum} from "./enums";

const getAllUSer = async () => {
    const {data: users} = await usersService.getAll();
    for (const user of users) {
        console.log(user.name);
    }
}

getAllUSer();
console.log(MyEnum.Add);
