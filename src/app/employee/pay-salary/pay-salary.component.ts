import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TranHistoryModalComponent } from '../company-account/tran-history-modal/tran-history-modal.component';
import { CompanyAccountService } from '../_core/service/company-account.service';
import { EmpAccService } from '../_core/service/emp-acc.service';
import { TransactionService } from '../_core/service/transaction.service';
import { TransferModalComponent } from './transfer-modal/transfer-modal.component';

@Component({
  selector: 'app-pay-salary',
  templateUrl: './pay-salary.component.html',
  styleUrls: ['./pay-salary.component.css']
})
export class PaySalaryComponent implements OnInit {

  conpanyAccList: any[] = [];
  employeeAccList: any[] = [];
  transactionList: any[] = [];

  bsModalRef: BsModalRef;

  constructor(
    private _empAccService: EmpAccService,
    private _companyAccountService: CompanyAccountService,
    private _transactionService: TransactionService,
    private _tosterService: ToastrService,
    private _modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.getEmpAccount();
    this.companyAccList();
  }

  getEmpAccount() {
    this._empAccService.findEmpAccList().subscribe(
      res => {
        this.employeeAccList = res.items ? res.items : [];
      }
    );
  }

  companyAccList() {
    this._companyAccountService.getCompanyAccList({}).subscribe(
      res => {
        this.conpanyAccList = res.items ? res.items : [];
        if (this.conpanyAccList.length > 0) {
          this.getTranList({ comAccount: this.conpanyAccList[0] });
        }
      }
    );
  }

  getTranList(data: any) {
    this._transactionService.findByCompany(data).subscribe(
      res => {
        this.transactionList = res.items ? res.items : [];
      }
    );
  }

  totalDrAmmount() {
    if (this.transactionList && this.transactionList.length > 0) {
      return this.transactionList.map(data1 => data1.drAmount).reduce((data2, data3) => { return data2 + data3 }, 0);
    }
    return 0;
  }

  totalCrAmmount() {
    if (this.transactionList && this.transactionList.length > 0) {
      return this.transactionList.map(data1 => data1.crAmount).reduce((data2, data3) => { return data2 + data3 }, 0);
    }
    return 0;
  }

  currentBalance() {
    if (this.transactionList && this.transactionList.length > 0) {
      return this.transactionList.map(data1 => data1.crAmount).reduce((data2, data3) => { return data2 + data3 }, 0) - this.transactionList.map(data1 => data1.drAmount).reduce((data2, data3) => { return data2 + data3 }, 0);
    }

    return 0;
  }

  tranHistory() {
    const initialState = {
      transactionList: this.transactionList
    }
    this.bsModalRef = this._modalService.show(TranHistoryModalComponent, { class: 'modal-md', initialState, backdrop: 'static' });
    this.bsModalRef.content.onClose.subscribe(result => {
    });
  }

  balanceTransfer(getVal: any) {
    const initialState = {
      data: { ...getVal }
    }
    this.bsModalRef = this._modalService.show(TransferModalComponent, { class: 'modal-md', initialState, backdrop: 'static' });
    this.bsModalRef.content.onClose.subscribe(result => {
    });
  }


}
