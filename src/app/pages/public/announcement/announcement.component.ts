import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  protected textSerch: string = "";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe((params: any) => {
        this.textSerch = params['params']?.textSearch
      })
  }
}
