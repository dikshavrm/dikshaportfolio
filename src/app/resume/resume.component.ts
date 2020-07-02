import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas';  
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent{
  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0; 
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight) ;
      // pdf.addPage(); 
      heightLeft -= pageHeight;

while (heightLeft >= 0) {
position = heightLeft - imgHeight;
pdf.addPage();
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
heightLeft -= pageHeight;
}
      pdf.save('DikshaVermaResume.pdf'); // Generated PDF   
    });  
  }  
}
