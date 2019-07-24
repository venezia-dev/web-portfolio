import { Component} from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  constructor(public ngxSmartModalService: NgxSmartModalService) {
  }
}

