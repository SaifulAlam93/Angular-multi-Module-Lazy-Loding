import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {
// inside CourseDetailComponent
courseId!: string;
constructor(private route: ActivatedRoute) {}
ngOnInit() { this.courseId = this.route.snapshot.paramMap.get('id') || ''; }

}
