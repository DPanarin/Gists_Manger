import {Component, OnInit} from '@angular/core';
import {LoaderNotifyService} from './loader-notify.service';
import {AccessTokenStorageService} from './access-token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GistsManager';

  showLoader: boolean;

  constructor(private requestStatus: LoaderNotifyService,
              private storageService: AccessTokenStorageService) {}

  ngOnInit() {
    this.showLoader = this.storageService.isTokenPresent();
    this.requestStatus.getRequestStatus().subscribe(status => {
      this.showLoader = !status;
    });
  }
}
