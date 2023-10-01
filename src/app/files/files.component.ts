import { Component } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {

  files: string[];

  constructor(private storage: Storage) { 
    this.files = []
  }

  ngOnInit() {
    this.getFiles();
  }

  uploadFile($event : any) {
    const file = $event.target.files[0];
    console.log(file);

    const fileRef = ref(this.storage, `files/${file.name}`);

    uploadBytes(fileRef, file)
    .then(response => {
      console.log(response)
      this.getFiles();
    })
    .catch(error => console.log(error));

  }

  getFiles() {
    const filesRef = ref(this.storage, 'files');

    listAll(filesRef)
    .then(async response => {
      console.log(response)
      this.files = [];
      for(let item of response.items) {
        const url = await getDownloadURL(item);
        this.files.push(url);
        console.log(url)
      }
    })
    .catch(error => console.log(error));
  }
}
