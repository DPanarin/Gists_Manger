import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GistInterface} from '../gist-interface';
import {FileInterface} from '../file-interface';
import {TimeDifferenceService} from '../time-difference.service';

@Component({
  selector: 'app-gist-code',
  templateUrl: './gist-files.component.html',
  styleUrls: ['./gist-files.component.scss']
})
export class GistFilesComponent implements OnInit {

  private currentGist: GistInterface;
  gistFiles: FileInterface[];
  createdAt: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private timeService: TimeDifferenceService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe( data => {
      this.currentGist = data.gist;
      this.gistFiles = Object.values(data.gist['files']);

      this.createdAt = this.timeService.getTimeDifference(this.currentGist.updated_at);
    });
  }

}
