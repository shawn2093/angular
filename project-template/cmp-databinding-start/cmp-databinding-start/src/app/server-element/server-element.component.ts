import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated 
  //None: css here will be applied globally, ShadowDom: depends on browser, Emulated is default
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  // @Input pass info from parent to child component
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log("constructor called!")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!")
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit called!");
    console.log('textContent: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called!")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called!")
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  // one time only

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called!")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called!")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called!");
    console.log('textContent: ' + this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called!")
  }

}
