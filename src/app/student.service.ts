import { Injectable } from '@angular/core';
import {Http} from '@angular/http';  
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : Http) {
  }
  
  GetAllMembers(name, subject, range){  
	  return this.http.get('http://localhost:61650/api/student/GetStudentsByFilters/?name='+name+'&subject='+subject+'&range='+range).pipe(map(res =>res.json()));  
  }  

  GetSubjects(subject) {
    
    return this.http.get('http://localhost:61650/api/student/GetSubjects/?name=' + subject).pipe(map(res=>res.json()));
  }
  
}
