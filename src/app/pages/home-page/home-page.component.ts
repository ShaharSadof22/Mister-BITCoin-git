import { Component, OnInit } from '@angular/core';
// import { User } from '../../models/user.model';

import { userService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  user: any
  rate: number
  showMovesFrom: string = 'all'

  constructor(private userService: userService, private BitcoinService: BitcoinService) { }

  async ngOnInit(): Promise<any> {
    this.user = this.userService.getUser()
    this.rate = await this.BitcoinService.getRate(this.user.coins)
  }

}
