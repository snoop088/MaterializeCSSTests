import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'se-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @HostBinding('class.nav-out') private _sideNavOut:boolean;
  
  @Input() set sideNavOut (state : boolean) {
      this._sideNavOut = state;
  }
  @Input() navWidth:number = 240;
  
  @Output() navOut = new EventEmitter();

  constructor() {}

  ngOnInit() {
    
  }
  

}
