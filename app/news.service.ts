import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_KEY=environment.apiKey;
const API_URL=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class NewsService {
currentNews : any;
  constructor(private http : HttpClient) { }

  getData(url)
  {
    
return this.http.get('https://newsapi.org/v2/'+url+'&apiKey='+API_KEY);
  }
}
