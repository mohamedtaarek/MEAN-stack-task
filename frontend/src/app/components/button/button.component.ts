import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  title: string = 'Mybutton'
  @Input()
  text!: string;
  @Input()
  color!: string;
  faSearch = faSearch;
  @Output() btnClick =  new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.btnClick.emit();
  }
}
