import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  articleList: String = '';
  atitle: String = '';
  state: String = '';
  author: String = '';
  pageNum = 1;
  total = 0;
  ROOT_URL = ROOT_URL;
  navigatePages: Number = 0;
  pagesNumbers = 0;
  isFirstPage = true;
  isLastPage = false;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getArticleList();
  }

  getArticleList() {
    const t = {
      state: this.state,
      atitle: this.atitle,
      author: this.author
    };
    const params = {
      pageNum: this.pageNum,
      condition: t,
    };
    this.http.post(this.ROOT_URL + '/ok/admin/findByAdminCondition', params).subscribe(
      res => {
        console.log(res);
        this.articleList = res['data']['list'];
        this.navigatePages = res['data']['navigatePages'];
        this.pagesNumbers = res['data']['navigatepageNums'];
        this.isFirstPage = res['data']['isFirstPage'];
        this.isLastPage = res['data']['isLastPage'];
      }
    );
  }
  changePage(num) {
    if (num === this.pageNum) {
      return;
    } else {
      this.pageNum = num;
      this.getArticleList();
    }
  }
  audit(aid, state) {
    const params = {aid: aid, state: state};
    this.http.get(this.ROOT_URL + '/ok/admin/changeAuditState', {params}).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
