import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UrlsService } from '../services/urls.service';
import { environment } from '../envirenment';

@Component({
  selector: 'app-launch-component',
  templateUrl: './launch-component.component.html',
  styleUrls: ['./launch-component.component.css']
})
export class LaunchComponentComponent {

  UrlForm!: FormGroup;
  shortedUrl: string = '';
  copied : boolean = false;
  hashUrl: any;
  constructor(private urlsService : UrlsService) { }

  ngOnInit() {
    this.UrlForm = new FormGroup({
      urlControl: new FormControl('', [Validators.required, Validators.pattern(/https?:\/\/.*/)]),
    });
  }
  GenerateShortUrl() {

    if(!this.UrlForm.invalid) 
      {
        this.urlsService.postApi(`${environment.backendEndpoint}/createUrl`, {urlInput: this.UrlForm.get('urlControl')?.value}).subscribe((response: any) => {
          console.log(response);
          this.hashUrl = response.hashUrl;
          this.shortedUrl = `https://acrube.onrender.com/${response.hashUrl}`;
        }, (error: any) => {
          console.log(error.message);
        });
      }
   

  };
  redirectToOriginalUrl() {
    this.urlsService.getApi(environment.backendEndpoint+'/'+this.hashUrl).subscribe((response: any) => {
      console.log('Received:', response);
    }, (error: any) => {
      console.log(error.message);
    });
  }
}

