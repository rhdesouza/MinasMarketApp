import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { Announcement } from 'src/app/model/dto/Announcement';
import { environment } from 'src/environments/environment';

const API: string = environment.API;
@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(
    private http: HttpClient
  ) { }

  public async getAnnouncements(txt: string): Promise<Announcement[]> {
    const options = {
      params: new HttpParams().set('title', txt)
    }

    return await firstValueFrom<any>(this.http.get(API + "api/v1/public/announcements", options));
  }


}
