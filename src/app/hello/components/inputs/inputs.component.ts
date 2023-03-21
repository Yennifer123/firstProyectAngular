import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

 
  public name: String;
  public hobbie: String;

  
  
  constructor() { 
    this.name = "";
    this.hobbie= "";
   
    
    
  }

  ngOnInit(): void {
  }

}
