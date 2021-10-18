import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Page } from 'src/app/core/Page';
// import { LabelType, Options } from 'ng5-slider';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent extends Page implements OnInit {
  expandable = true;
  showSearchHeader = true;
  state = false;
  clickOnExportBTN = false;

  viewState: Params;

  constructor(private snackBar: MatSnackBar) {
    super('#/search/home/', (error, action, className) => {
      this.snackBar.open(error, action, {
        panelClass: [className],
        duration: 10000,
      });
    });
    this.init(this.viewState);
    this.resetViewState({ name: null , sortByPrice : null});
  }

  ngOnInit(): void {}

  expansion_onOpen(sender: any) {
    if (
      this.expandable == false &&
      sender.expanded != false &&
      this.state == false
    ) {
      sender.close();
    }
    if (this.clickOnExportBTN) {
      sender.close();
      this.clickOnExportBTN = false;
    }

    if (this.expandable != false && sender.expanded != false) {
      this.showSearchHeader = false;
    }
  }

  expansion_onClose(sender: any) {
    if (
      this.expandable == false &&
      sender.expanded == false &&
      this.state == true
    ) {
      this.showSearchHeader = true;
      sender.open();
    }

    if (this.expandable != false && sender.expanded == false) {
      this.showSearchHeader = true;
    }
  }

  OnSearchByFilter() {}

  OnClearFilter() {}
}
interface Params {
  name: string;
  sortByPrice: string;
}
