import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './Helpers';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http : HttpClient) { }

  public getDepartments(){

    return this.http.get(`${baseUrl}/departement/retrieve-all-departements`);


  }


  public addDepartment(departement:any){

    return this.http.post(`${baseUrl}/departement/add-departement/`,departement);

  }

  updateDepartment(depatement:any){

    return this.http.put(`${baseUrl}/departement/update-departement`, depatement);

  }

  deleteDepartment(id:any){

    return this.http.delete(`${baseUrl}/departement/remove-departement/${id}`);
  }



  getDepartment(id:any){

    return this.http.get(`${baseUrl}/departement/retrieve-departement/${id}`);

  }


  getCountDept(){

    return this.http.get(`${baseUrl}/departement/count`);


  }




}
