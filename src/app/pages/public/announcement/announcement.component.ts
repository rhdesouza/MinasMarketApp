import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementService } from '../announcement/announcement.service';
import { Announcement } from 'src/app/model/dto/Announcement';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  protected textSerch: string = "";
  protected announcements: Announcement[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private announcementService: AnnouncementService
  ) { }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe((params: any) => {
        this.getAnnouncements(params['params']?.textSearch);
      })
  }

  private getAnnouncements(text: string) {
    this.announcementService.getAnnouncements(text)
    .then((ret: Announcement[]) =>{
      this.announcements = ret;
    })
    .catch(ex=>{
      console.error(ex);
    })
      
  }

}
