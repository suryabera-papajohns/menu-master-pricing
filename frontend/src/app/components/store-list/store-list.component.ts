import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {
  storeList:any = [];
  constructor(private storeService: StoreService,) { 
    this.getStoreList();
  }

  ngOnInit(): void {
  }
getStoreList() {
    this.storeService.getStoreList().subscribe(data => {
     this.storeList = data.stores;
    });
  }
  onSubmit() {
    console.log('submitted',this.storeList);
  }
}
