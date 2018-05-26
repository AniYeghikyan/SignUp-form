export class User {

    id: number;
    l_name: string;
    f_name: string;
    email: string;
    /*Both the passwords are in a single object*/
    password: {
        pwd: string;
        confirmPwd: string;
    };

    gender: string;
    terms: boolean;

    constructor(values: Object = {}) {
        /*Constructor initialization*/
        Object.assign(this, values);
    }

}
