import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DynamicDirective } from './dynamic.directive';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-using-directive',
  templateUrl: './using-directive.component.html',
  styleUrls: ['./using-directive.component.css']
})
export class UsingDirectiveComponent implements OnInit {
  @ViewChild(DynamicDirective, { static: true }) appDynamic: DynamicDirective;

  constructor(private componentFactoryResolve: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  dynamicLoad() {
    const componentFactory = this.componentFactoryResolve.resolveComponentFactory(FirstComponent);
    const viewContainerRef = this.appDynamic.viewContainer;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = 'Data From Load'
  }
  dynamicLoadSecond() {
    const componentFactory = this.componentFactoryResolve.resolveComponentFactory(SecondComponent);
    const viewContainerRef = this.appDynamic.viewContainer;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data='DATA From '
  }

} 
