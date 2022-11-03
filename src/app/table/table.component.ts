
import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataContent: any;
  currentRow: any;

  color: boolean = false;

  constructor(private userService: UserService) { 
    this.userService.getDetail().subscribe((resp) => {
      console.log(resp);
      this.dataContent = resp;
  })
  }

  ngOnInit(): void {
  }
  edit(id:any){
      this.currentRow=id;
      if(!this.color){
        this.color=true;
      }else{
        this.color=false;
      }
  }

}
