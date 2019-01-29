import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GitHubService} from '../git-hub.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseGistInterface, GistInterface} from '../gist-interface';
import {FileInterface} from '../file-interface';
import {ModeService} from '../mode.service';
import {map} from 'rxjs/operators';

interface GistFormDataInterface extends BaseGistInterface {
  files: FileInterface[];
}

@Component({
  selector: 'app-create-edit-gist',
  templateUrl: './create-edit-gist.component.html',
  styleUrls: ['./create-edit-gist.component.scss']
})
export class CreateEditGistComponent implements OnInit {

  @ViewChild('editor') editor;

  form: FormGroup;

  fileType = ['.javascript', '.json', '.html', '.css'];

  editMode = false;

  incomingGist: GistInterface;

  constructor(private formBuilder: FormBuilder,
              private gitApiService: GitHubService,
              private route: ActivatedRoute,
              private router: Router,
              private modeService: ModeService) { }

  ngOnInit() {
    this.route.data.pipe(map(data => data.data)).subscribe( data => {

      if (data) {
        this.editMode = true;
      }

      this.initForm(data.files);


      if (data) {
        this.incomingGist = data;
        this.patchForm(this.incomingGist);

      }

    });
  }



  private patchForm(data: GistInterface) {
    this.form.patchValue(this.convertFilesToArray(data));
  }

  private convertFilesToArray(data: GistInterface) {
    return {...data, files: Object.values(data.files)} as GistFormDataInterface;
  }

  private initForm(files?: {[filename: string]: FileInterface}) {
    this.form = this.formBuilder.group({
      description: ['', Validators.required],
      public: [false],
      files: this.formBuilder.array(this.createFilesArray(files))
    });
  }



  createFilesArray(files: {[filename: string]: FileInterface}) {
    if (!files) {
      return [this.createFileGroup()];
    }

    const filesTemplates: FormGroup[] = [];

    Object.keys(files).forEach( () => {
      filesTemplates.push(this.createFileGroup());
    });

    return filesTemplates;
  }

  resolveTrackBy(index: number) {
    return index;
  }

  get filesArray() {
    return this.form.get('files') as FormArray;
  }

  private addFileGroup() {
    this.filesArray.push(this.createFileGroup());
  }

  private removeFileGroup(index: number) {
    this.filesArray.removeAt(index);
  }

  private createFileGroup() {
    if (this.editMode) {
      return this.formBuilder.group({
        filename: ['', Validators.required],
        content: ['', Validators.required]
      });
    }

    return this.formBuilder.group({
      filename: ['', Validators.required],
      extension: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit(form) {

    if (!this.editMode) {
      const requestBody = this.convertDataToRequestBody(form);

      this.gitApiService.createGist(requestBody).subscribe( (data) => {
        this.router.navigate(['/gists', data.id]);
      });

      return;
    }

    this.incomingGist.description = form.description;

    if (form.files) {
      form.files.forEach( (file: FileInterface) => {
        if (this.incomingGist.files.hasOwnProperty(file.filename)) {
          this.incomingGist.files[file.filename].filename = file.filename;
          this.incomingGist.files[file.filename].content = file.content;

          return;
        }

        this.incomingGist.files[file.filename] = file;
      });
    }

    this.gitApiService.editGist(this.incomingGist, this.incomingGist.id).subscribe( (response) => {
      this.router.navigate(['/gists', response.id]);
    });
  }

  convertDataToRequestBody(formData: any) {
    const formObject = {...formData};
    const filesObject = {};
    formObject.files.forEach( file => {
      file.filename = file.filename + file.extension;
      filesObject[file.filename] = { content: file.content};

      delete file.extension;
    });
    formObject.files = {...filesObject};
    return formObject;
  }


  deleteFile(filename: string, index: number) {
    this.incomingGist.files[filename] = null;
    this.removeFileGroup(index);
  }

  getMode(filename: string) {
    return this.modeService.getMode(filename);
  }
}
