import { Component, OnInit } from '@angular/core';
import { AngularFileUploaderConfig } from 'angular-file-uploader';

@Component({
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  resetUpload1: boolean;
  resetUpload2: boolean;
  resetUpload3: boolean;


  afuConfig1: AngularFileUploaderConfig = {
    id: 112233,
    multiple: true,
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer justatesttoken'
      },
      params: {
        'page': '1'
      },
    }
  };

  afuConfig2: AngularFileUploaderConfig = {
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    maxSize: 1,
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
    },
    formatsAllowed: '.jpg,.png',
    multiple: true,
  };

  afuConfig3: AngularFileUploaderConfig = {
    theme: 'dragNDrop',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    maxSize: 1,
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
    },
    formatsAllowed: '.jpg,.jpeg,.png',
    multiple: true,
  };

  constructor() {
  }

  docUpload(env) {
    console.log(env);
  }
}
