import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public activeLang = 'es';

  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(this.activeLang);
  }


  ngOnInit() {
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
