import {Component, OnInit, ViewChild} from '@angular/core';
import {SignaturePad} from "angular2-signaturepad";

@Component({
  selector: 'app-signaturepad',
  templateUrl: './signaturepad.component.html',
  styleUrls: ['./signaturepad.component.css']
})
export class SignaturepadComponent implements OnInit {
  signatureImg: string;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 400,
    'canvasHeight': 100
  };
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 2);
    this.signaturePad.clear();
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
  }

}
