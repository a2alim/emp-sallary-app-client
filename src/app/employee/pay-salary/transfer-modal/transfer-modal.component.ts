import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-transfer-modal',
  templateUrl: './transfer-modal.component.html',
  styleUrls: ['./transfer-modal.component.css']
})
export class TransferModalComponent implements OnInit {

  onClose: Subject<boolean>;
  title: string;
  data: any = {}

  constructor(
    public bsModalRef: BsModalRef,
    private _modalService: BsModalService,
    private _tosterService: ToastrService
  ) { }

  ngOnInit() {
    this.onClose = new Subject();
    console.log(this.data);
  }

}
