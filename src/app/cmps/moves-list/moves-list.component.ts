import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move.model';
import { User } from 'src/app/models/user.model';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {
  currUser: User = null;
  moves:Move[] = [];

  @Input() showMovesFrom: string
  // @Input() contact: Contact

  constructor(private userService: userService) { }

  ngOnInit(): void {
    this.currUser = this.userService.getUser()
    this.moves = this.getMovesToShow()
  }
  
  getMovesToShow(){
    if (this.showMovesFrom === 'all') {
      return this.currUser.moves
    } else {
      return this.currUser.moves.filter(move => move.to === this.showMovesFrom)
    }
  }

}
