import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { departments } from '../data/departments';

@Component({
  selector: 'app-department-overview',
  templateUrl: './department-overview.component.html',
  styleUrls: ['./department-overview.component.scss']
})
export class DepartmentOverviewComponent implements OnInit {
  public department;

  constructor(private route: ActivatedRoute) {
    this.department = {id:-1,name:''}
  }

  ngOnInit() {
    this.route.parent.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.department = departments.find(x => x.id === id)
    });
  }

}
