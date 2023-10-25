import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // property defined as type of event data type, passed to app html
  // @Output pass info out of current component

  // newServerName = '';
  // newServerContent = '';

  // @ViewChild(CockpitComponent) serverContentInput;
  // still use local references
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
    // emit a method for event of serverCreated type
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.serverContentInput.nativeElement.value = "something"; not recommended
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      // local references
      serverContent: this.serverContentInput.nativeElement.value
      // viewChild (still use local references)
    })
  }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   })
}
