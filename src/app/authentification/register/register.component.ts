import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private router: Router) {
    }

    username: string;
    password: string;
    email: string;
    passwordcheck: string;

    ngOnInit() {
    }

    login(): void {
        if (this.username == 'admin' && this.password == 'admin') {
            this.router.navigate(['user']);
        } else {
            alert('Invalid credentials');
        }
    }

}
