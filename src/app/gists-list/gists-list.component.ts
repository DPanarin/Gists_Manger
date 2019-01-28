import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {GitHubService} from '../git-hub.service';

@Component({
  selector: 'app-gists-list',
  templateUrl: './gists-list.component.html',
  styleUrls: ['./gists-list.component.scss']
})
export class GistsListComponent implements OnInit, OnDestroy {

  gistsList;
  private routeSubscription;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: GitHubService) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      this.gistsList = data.gistsList;
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
