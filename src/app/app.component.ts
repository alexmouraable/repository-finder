import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from '@cime/ngx-slim-loading-bar';
import { NavigationStart, NavigationEnd, Event, Router } from "@angular/router";  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private slimLoadingBarService: SlimLoadingBarService, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.slimLoadingBarService.start()
      }

      if (event instanceof NavigationEnd) {
        this.slimLoadingBarService.complete();
      }
    });
  }

}
