import {Component, OnInit} from '@angular/core';
import {ResourceService} from "../services/resource.service";

@Component({
  selector: 'app-list-laboratories',
  templateUrl: './list-laboratories.component.html',
  styleUrls: ['./list-laboratories.component.scss']
})
export class ListLaboratoriesComponent implements OnInit {
  public laboratories = <any>{};

  constructor(private resourceService: ResourceService) {
  }

  ngOnInit(): void {
    this.getLaboratories()
  }

  onSaveLaboratory(data: any) {
    this.resourceService.saveResource(this.resourceService.host + "/laboratories", data).subscribe(
      data => {
        this.getLaboratories()
      }
    )

  }

  private getLaboratories() {
    return this.resourceService.getResource("/laboratories").subscribe(
      data => {
        this.laboratories = data
      }
    )
  }

  onDeleteLaboratory(l: any) {
    let conf = confirm("vous etes sures de vouloir supprimer le laboratoire : " + l.name)

    if (conf) {
      this.resourceService.deleteResource(l._links.self.href).subscribe(
        data => {
          this.getLaboratories()
        }
      )
    }
  }
}
