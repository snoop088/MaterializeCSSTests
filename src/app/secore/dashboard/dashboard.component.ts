import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";
import { SideNavComponent } from "../side-nav/";
//declare var $:any;
@Component({
  moduleId: module.id,
  selector: 'se-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [MaterializeDirective, SideNavComponent]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  
  private _sideNavOut:boolean = true;
  private _userName:string = "Nick Dimitrov";
  constructor() {}

  ngOnInit() {
  
  }
  ngAfterViewInit() {
    
  }
  sideNavIn(e):void {
    this._sideNavOut = false;
  }
  sideNavOut(e):void {
    this._sideNavOut = true;
  }
}
