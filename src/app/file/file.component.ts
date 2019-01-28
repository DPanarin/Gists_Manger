import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GitHubService} from '../git-hub.service';
import {FileInterface} from '../file-interface';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit, AfterViewInit {

  @ViewChild('editor') editor;


  file: FileInterface;

  constructor(private route: ActivatedRoute, private apiService: GitHubService) { }

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
    const arrLength = filename.split('.').length;
    const fileExtension = filename.split('.')[arrLength - 1];
    if (fileExtension === 'js' || fileExtension === 'javascript' || fileExtension === 'ts') {
      return 'javascript';
    }
    if (fileExtension === 'json') {
      return 'json';
    }
    if (fileExtension === 'css') {
      return 'css';
    }
    if (fileExtension === 'html') {
      return 'html';
    }
  }

  ngAfterViewInit(): void {
    // this.editor.config.set('basePath', '/Scripts/Ace');
  }

}
