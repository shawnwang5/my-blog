import { AfterContentInit, Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: [ './layout.component.scss' ]
})
export class LayoutComponent implements OnInit, AfterContentInit {
    constructor (private router: Router) {
    }

    ngOnInit () {
    }

    ngAfterContentInit (): void {
    }
}

