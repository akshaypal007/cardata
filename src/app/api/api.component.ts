import { Component, OnInit } from '@angular/core';

//importing Httpclient
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getCarData();
  }

  mycar:any[]=[];

  getCarData()
  {
    var url="https://cybotrix.com/ios/car.json";
    this.obj.get(url).subscribe(
    response=>{
                this.mycar = response as string[];
    });
  }

  //adding for pagination and searching
  p:number=1;
  keyword:string;

}
