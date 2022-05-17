import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {


  public errorMessage1: string = "Ooops..Something went wrong"
  public errorMessage2: string = "The page you are looking has been moved or removed"
  constructor() { }

  ngOnInit(): void {
  }

}
