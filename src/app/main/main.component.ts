import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GitHubService} from '../git-hub.service';
import {AccessTokenStorageService} from '../access-token-storage.service';
import {BehaviorService} from '../behavior.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private tempAuthCode: string;

  constructor(private route: ActivatedRoute,
              private apiService: GitHubService,
              private tokenSaver: AccessTokenStorageService,
              private router: Router,
              private behaviorService: BehaviorService) { }

  ngOnInit() {
    this.tempAuthCode = this.route.snapshot.queryParamMap.get('code');
    this.apiService.exchangeCodeToAccessToken(this.tempAuthCode).subscribe(data => {
      if (data.token) {
        this.tokenSaver.setAccessToken(data.token);
        this.behaviorService.onTokenCreate.emit();
        this.router.navigate(['/gists']);
      }
    });
  }
}
