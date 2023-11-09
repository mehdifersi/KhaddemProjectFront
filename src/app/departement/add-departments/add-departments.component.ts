import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {DepartmentsService} from "../../Services/departments.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {

  departmentData={
    nomDepartment:'',
  };

  constructor(private department:DepartmentsService,private router : Router) { }

  ngOnInit(): void {
  }

  addDepartment(){
    this.department.addDepartment(this.departmentData).subscribe(
      (data:any)=>{
        console.log(data)
        Swal.fire('Succé', 'Department ajouté avec succé', 'success');
        this.router.navigate(['/listDepartement']);
      },
      (error)=>{
        Swal.fire('Erreur !', 'Erreur de cette opération', 'error');
        console.log(error);

      }
    );




  }

}
