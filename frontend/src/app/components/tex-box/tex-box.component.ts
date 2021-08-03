import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tex-box',
  templateUrl: './tex-box.component.html',
  styleUrls: ['./tex-box.component.css']
})
export class TexBoxComponent implements OnInit {
  @Input()
  labelText!: string;
  @Input()
  type!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
