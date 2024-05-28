import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-questions',
  templateUrl: './common-questions.component.html',
  styleUrls: ['./common-questions.component.css']
})
export class CommonQuestionsComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  @Input() isDarkMode: boolean = true;
  dropdownOpen: number = 0;
  buttonText1: string = "ما هي المنتجات التي تقدمها جرين فودز ؟";
  buttonText2: string = "كيف يمكنني الحصول علي عينات مجنية للتجربة ؟";
  buttonText3: string = "هل من الممكن تخصيص العبوة لظلبات مبلغ معين ؟ ";
  buttonText4: string = "ما هي الملصقات البيضاء وهل تقدمها جرين فودز ؟";
  buttonText5: string = "ما هي موهلة التسليم المتوقعة للطلبات ؟";
  buttonText6: string = "هل تقدم جرين فودز اي خصومات علي منتجاتها ؟";
  buttonText7: string = "هل هناك أي خصومات حصرية متاحة للعملاء لأول مرة في جرين فودز ؟";
  buttonText8: string = "كيف تتعامل جرين فودز مع شكاوي الجودة ؟";
  buttonText9: string = "هل يمكن تقديم شهادات محددة للمنتجات التي توفرها جرين فودز ؟";
  buttonText10: string = "ما نوع العبوات التي توفرها جرين فودز ؟";
  buttonText11: string = "ما هي تدابير مراقبة الجودة المتخذة لضمان أن جميع المنتجات التي تقدمها جرين فودز أمنة ومغذية ؟  ";
  buttonText12: string = "ما الذي يميز جرين فودز عن غيره من مقدمي الأغذية ؟";
  buttonText13: string = "هل هناك أي منتجات موسمية او محدودة الإصدار تقدمها جرين فودز ؟";
  buttonText14: string = "كيف تبقي جرين فودز علي إطلاع دائم بأحدث اتجاهات الصناعة وطلبات المستهلكين ؟";
  buttonText15: string = "هل لدي جرين فودز برنامج ولاء للعملاء أو نظام مكافأت ؟";
  toggleDropdown(num: number) {
    (this.dropdownOpen == num) ? this.dropdownOpen = 0 : this.dropdownOpen = num;
  }
}
