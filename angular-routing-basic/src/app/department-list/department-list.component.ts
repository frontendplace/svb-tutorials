import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { departments } from '../data/departments';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  public selectedId;
  public departments = departments;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
    } );
  }

  onSelect(department) {
    //this.router.navigate(['/departments', department.id]);
    //interpreting the destination URI as relative to the activated child route
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department): boolean {
    return department.id === this.selectedId;
  }

}
