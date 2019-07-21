import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentModel } from '../model/student-model';
import { SubjectModel } from '../model/subject-model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


	students : StudentModel[];

	subjects : SubjectModel[];

	formdata;

	name;
	subject;
	range;

	mensajeFiltro;

	constructor(private studentService : StudentService) {  
		this.name = "";
		this.subject = "";
		this.range = 0;
	}

  
	ngOnInit() {

		this.formdata = new FormGroup({
			name: new FormControl(this.name),
			subject: new FormControl(this.subject),
			range : new FormControl(this.range)
		 });
		this.studentService.GetAllMembers(this.name, this.subject, this.range).subscribe((students) => {  
		  this.students = students;  
		}); 

		this.studentService.GetSubjects(this.subject).subscribe((subjects) => {  
			this.subjects = subjects;
		}); 
	};

	onClickSubmit(data) {
		this.name = data.name;
		this.subject = data.subject;
		this.range = data.range;
		if (this.range == null) {
			this.range = 0;
		}
		this.ngOnInit();
 	};
		
  }


