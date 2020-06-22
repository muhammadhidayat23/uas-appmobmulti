import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: any;
  constructor(
    public navCtrl: NavController, 
    public http : HttpClient ){
    this.getData();

  }

  getData(){
    let url = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=7bc45442d96f4c64811f7d1c376c7830';
    this.http.get(url).subscribe(data => {
      this.data = data;
    });
    }
    
  }
