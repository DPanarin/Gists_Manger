import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {GitHubService} from '../git-hub.service';
import {GistInterface} from '../gist-interface';

@Component({
  selector: 'app-gists-list',
  templateUrl: './gists-list.component.html',
  styleUrls: ['./gists-list.component.scss']
})
export class GistsListComponent implements OnInit, OnDestroy {

  gistsList: GistInterface[];
  private routeSubscription;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: GitHubService) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      this.gistsList = data.gistsList;
    });
  }

  /**
   * Temporary method for testing some api feature
   */
  getEvents() {
    this.dataService.getUserEvents().subscribe( userEvents => {
      console.log(userEvents);
    });
  }

  deleteGist(gist) {
    this.dataService.deleteGist(gist.id).subscribe( () => {
      this.router.navigate(['/gists']);
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
