import {Component, OnInit} from '@angular/core';
// Import the User model
import {User} from '../User';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

    /*Inject the formbuilder into the constructor*/
    constructor(private fb: FormBuilder) {
    }

    /*Property for the user*/
    private user: User;

    /*Gender list for the select control element*/
    genderList: string[];
    signupForm: FormGroup;


    ngOnInit() {

        this.genderList = ['Male', 'Female', 'Others'];

        // Use the formbuilder to build the Form model
        this.signupForm = this.fb.group({
            f_name: ['', Validators.required],
            l_name: ['', Validators.required],
            email: ['', [Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: this.fb.group({
                pwd: ['', [Validators.required,
                    Validators.minLength(8)]],
                confirmPwd: ['', [Validators.required,
                    Validators.minLength(8)]]
            }),
            gender: ['', Validators.required],
            terms: ['', Validators.requiredTrue]
        });

    }

    get f_name() {
        return this.signupForm.get('f_name');
    }

    get l_name() {
        return this.signupForm.get('l_name');
    }

    get email() {
        return this.signupForm.get('email');
    }

    get password() {
        return this.signupForm.get('password');
    }

    get gender() {
        return this.signupForm.get('gender');
    }

    get terms() {
        return this.signupForm.get('terms');
    }

    public onFormSubmit() {
        if (this.signupForm.valid) {
            this.user = this.signupForm.value;
            alert('Hello ' + this.user.f_name);
            console.log(this.user);
        }
    }
}