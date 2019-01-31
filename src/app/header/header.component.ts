import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccessTokenStorageService} from '../access-token-storage.service';
import {GitHubService} from '../git-hub.service';
import {BehaviorService} from '../behavior.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class HeaderComponent implements OnInit {


  clientId = 'c252fc12bf2935b4464e';

  userName: string;

  logInLink = `https://github.com/login/oauth/authorize?scope=gist repo?&client_id=${this.clientId}`;


  userLogged = false;

  constructor(private router: Router,
              private tokenStorage: AccessTokenStorageService,
              private apiService: GitHubService,
              private behaviorService: BehaviorService) { }

  ngOnInit() {
    this.getUser();

    if (this.tokenStorage.isTokenPresent()) {
      this.behaviorService.onTokenCreate.emit();
    }
  }

  getUser() {
    this.behaviorService.onTokenCreate
      .pipe(switchMap(() => this.apiService.getCurrentUser()))
      .subscribe(user => {
        this.userName = user.login;
        this.userLogged = true;
        this.router.navigate(['/gists']);
      }, () => (this.userLogged = false));

    // this.behaviorService.onTokenCreate.subscribe(() => {
    //   this.apiService.getCurrentUser().subscribe(user => {
    //     this.userName = user['login'];
    //     this.userLogged = true;
    //     this.router.navigate(['/gists']);
    //   }, (error) => {
    //     this.userLogged = false;
    //   });
    // });
  }


  logOut() {
    this.userLogged = false;
    this.tokenStorage.deleteToken();
  }

}
