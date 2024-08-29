// import { Component, OnInit } from '@angular/core';
import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  Injector,
  EnvironmentInjector,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-individuos-comercios',
  templateUrl: './individuos-comercios.component.html',
  styleUrls: ['./individuos-comercios.component.scss'],
})
export class IndividuosComerciosComponent implements OnInit {
  @ViewChild('dynamicComponentContainer', {
    read: ViewContainerRef,
    static: true,
  })
  container!: ViewContainerRef;

  constructor(
    private injector: Injector,
    private environmentInjector: EnvironmentInjector
  ) {}

  async ngOnInit() {}
}
