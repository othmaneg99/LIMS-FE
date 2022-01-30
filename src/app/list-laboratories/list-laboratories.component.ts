import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../services/articles.service";

@Component({
  selector: 'app-list-laboratories',
  templateUrl: './list-laboratories.component.html',
  styleUrls: ['./list-laboratories.component.scss']
})
export class ListLaboratoriesComponent implements OnInit {
  public laboratories = <any>{};
  constructor(private articlesService:ArticlesService) { }

  ngOnInit(): void {
    this.getLaboratories()
  }

  onSaveLaboratory(data: any) {
    this.articlesService.saveResource(this.articlesService.host+"/laboratories",data).subscribe(
      data => {
        this.getLaboratories()
      }
    )

  }

  private getLaboratories() {
    return this.articlesService.getResource("/laboratories").subscribe(
      data =>{
        this.laboratories = data
      }
    )
  }


  onDeleteLaboratory(l: any) {
    let  conf = confirm("vous etes sures de vouloir supprimer le laboratoire : "+l.name)

    if(conf) {
      this.articlesService.deleteResource(l._links.self.href).subscribe(
        data => {
          this.getLaboratories()
        }
      )
    }
  }
}
