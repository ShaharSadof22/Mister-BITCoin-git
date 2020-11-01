import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model'
import { userService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  name: string 
  successMsg: string 
  alertMsg: string
  amount: number;
  // users: User[];
  user: User;
  userIdx: number
  subscription: Subscription

  @Input() contact: Contact

  constructor(private userService: userService) { }

  ngOnInit(): void {
    this.name = this.contact.name
    this.user = this.userService.getUser()
    // this.userIdx = this.userService.getCurrUserIdx()

    // this.userService.loadUsers()
    // this.subscription = this.userService.users$.subscribe(users => {
    //   this.user = users[this.userIdx]
    //   console.log("TransferFundComponent -> ngOnInit -> this.user", this.user)
    // })
  }

  onTransfer() {
    this.successMsg = ''
    if (this.amount <= 0) {
      this.alertMsg = 'The amount should be positive'
      return;
    }
    if (this.amount > this.user.coins) {
      this.alertMsg = 'The amount is more than you have'
      return;
    }
    this.alertMsg = ''
    this.successMsg = 'Your coins transferred successfully'
    this.userService.addMove(this.contact, this.amount)
    this.amount = null
  }

}
