import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { departments } from '../data/departments';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = parseInt(params.get('id'));
    });
  }

  goPrevious() {
    let previousId = Math.max(this.departmentId - 1,0);
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = Math.min(this.departmentId + 1, departments.length-1);
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }

  showOverview(){
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact(){
    this.router.navigate(['contact'], { relativeTo: this.route });
  }

}
