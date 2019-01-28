import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GitHubService} from '../git-hub.service';
import {FileInterface} from '../file-interface';
import {ModeService} from '../mode.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit, AfterViewInit {

  @ViewChild('editor') editor;


  file: FileInterface;

  constructor(private route: ActivatedRoute, private apiService: GitHubService, private modeService: ModeService) { }

  ngOnInit() {
    this.route.data.subscribe( (data: any) => {
      this.file = data.file;
    });
  }

  displayContent() {
    const content = this.editor.getEditor().getValue();
    console.log(content);
  }

  onChange(event) {
  }

  getMode(filename: string) {
    return this.modeService.getMode(filename);
  }

  ngAfterViewInit(): void {
    // this.editor.config.set('basePath', '/Scripts/Ace');
  }

}
