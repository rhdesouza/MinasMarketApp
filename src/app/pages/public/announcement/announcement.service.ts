import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { environment } from 'src/environments/environment';

const API: string = environment.API;
@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  constructor(
    private http: HttpClient
    ) { }

    public async getAnnouncements(txt: string): Promise<any>{
      return await firstValueFrom(this.http.get(API + "public/announcements/all"));
    }


}
