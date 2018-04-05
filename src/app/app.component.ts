import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  environmentName = environment.envName;
  animal: string = environment.animal;
  baseUrl:string = environment.apiUrl;
  constructor() { }

  ngOnInit() {
    //this.baseUrl = this._config.baseUrl;
  }
}
