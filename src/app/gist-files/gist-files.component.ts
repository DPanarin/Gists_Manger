import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GitHubService} from '../git-hub.service';

@Component({
  selector: 'app-gist-code',
  templateUrl: './gist-files.component.html',
  styleUrls: ['./gist-files.component.scss']
})
export class GistFilesComponent implements OnInit {

  private currentGist: Object;
  gistFiles: Object;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe( data => {
      this.currentGist = data.gist;
      this.gistFiles = Object.values(data.gist['files']);
    });
  }
}
