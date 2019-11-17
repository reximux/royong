import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public navCtrl: NavController,
    public router: Router) { }

  ngOnInit() {
  }

  form() {
    this.router.navigate(['/form']);
  }

}
