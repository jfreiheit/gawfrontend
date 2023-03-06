import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  // API url --> hier die url noch eintragen
  baseApiUrl = ''; 
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload(fileToUpload:any):Observable<any> {
  
      // Create form data
      const formData = new FormData(); 
        
      // Store form name as "file" with file data
      formData.append('fileKey', fileToUpload, fileToUpload.name);
        
      // Make http post request over api
      // with formData as req
      return this.http.post(this.baseApiUrl, formData)
  }
  }
