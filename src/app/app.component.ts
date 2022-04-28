import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test';
  usersLists: Array<any> = [];
  user:any;
  constructor(private appService: AppService) {}
  public ngOnInit(): void {
    this.getUserLists();
  }
  getUserLists() {
    this.appService.getUserLists().subscribe((userList: any) => {
      console.log('this.appService.getUserLists ~ userList', userList);
      this.usersLists = userList;
    });
  }

  onLoadUserDetails(userID:number) {
    this.user = this.usersLists[userID-1];
  }
}
