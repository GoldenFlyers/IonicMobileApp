import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  datas: any;
  constructor(private newsService: NewsService,private router : Router) { }

  ngOnInit() {
    this.newsService.getData('top-headlines?country=us&category=business')
      .subscribe(data => {
        console.log(data);
        this.datas = data;
      })
  }

  onGoToNewsDetails(artical) {
    this.newsService.currentNews = artical;
    this.router.navigate(['/news-single']);
  }
}
