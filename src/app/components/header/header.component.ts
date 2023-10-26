import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  checked:boolean =true;
  goBack(): void {
    // تنفيذ العمليات الخاصة بزر العودة
  }

  save(): void {
    // تنفيذ العمليات الخاصة بزر الحفظ
  }

  delete(): void {
    // تنفيذ العمليات الخاصة بزر الحذف
  }
}
