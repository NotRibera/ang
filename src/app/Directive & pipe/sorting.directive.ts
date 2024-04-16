import {Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2} from "@angular/core";

@Directive({
  selector:'[appSorting]'
})

export class AppSortingDirective implements OnInit{
  @Input() data: any[] = [];
  @Input() field:string ="";

  clicked:boolean=false;
  element: ElementRef;
  renderer:Renderer2;

  constructor(private elementRef: ElementRef,renderer:Renderer2) {
     this.element=elementRef;
    const div = renderer.createElement('i');
    renderer.appendChild(this.element.nativeElement,div);
    this.renderer=renderer;
  }

  @HostListener('click', ['$event']) onClick($event: string){
    let child=this.element.nativeElement.children[0];
  console.log(child)

        if (!this.clicked)
        {
          if (typeof(this.data[0][this.field])=='string')
          {
            this.data.sort((a, b) => {
             if (a[this.field]<b[this.field]) {return -1;}
              if (a[this.field]>b[this.field]) {return 1;}
              return 0;
            });
          }else{
            this.data.sort((a, b) => {
              return a[this.field] - b[this.field];
            });
          }
          this.renderer.setAttribute(child,"class","bi bi-arrow-up");
        }
        else {
          if (typeof(this.data[0][this.field])=='string'){
            this.data.sort((a, b) => {
              if (a[this.field]>b[this.field]) {return -1;}
              if (a[this.field]<b[this.field]) {return 1;}
              return 0;
            });
          }else{
            console.log("reversing no")
            this.data.sort((a, b) => {
              return a[this.field] - b[this.field];
            }).reverse();
          }
          this.renderer.setAttribute(child,"class","bi bi-arrow-down");
        }
      this.clicked=!this.clicked;

  }

  ngOnInit() {}
}
