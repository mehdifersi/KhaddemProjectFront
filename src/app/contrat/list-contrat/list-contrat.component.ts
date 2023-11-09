import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {ContratService} from "../../Services/contrat.service";

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {

  Contrats : any=[];


  totalLength:any;
  page:number = 1;

  ContratData={
    id:'',
    dateDebutContrat:'',
    dateFinContrat:'',
    specialite:'',
    archive:'',
    etudiant:{
      id:'',
    },
  };

  constructor(private contrat:ContratService) { }

  ngOnInit(): void {
    this.getListContrat();
  }

  getListContrat(){
    this.contrat.getContrat().subscribe(
      (data:any)=>{
        this.Contrats = data;
        console.log(this.Contrats);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur !!', 'Erreur dans la récupération des deonnées', 'error');
      }
    )
  }



  details(cnt:any){
    this.ContratData = cnt;
  }



  deleteContrat(id:any){

    Swal.fire({
      icon : 'info',
      title : 'Vous-ètes sùr ?',
      confirmButtonText : 'Supprimer',
      showCancelButton : true,
    }).then((result)=>{
      if(result.isConfirmed){
        this.contrat.deleteContrat(id).subscribe(
          (data)=>{

            Swal.fire('Succé', 'Etudiant supprimée avec succé', 'success');
            window.location.reload();
          },

          (error)=>{
            Swal.fire('Erreur', 'Erreur de suppression', 'error');

          }
        );

      }
    });

  }




}
