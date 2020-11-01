import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';

import { User } from 'src/app/models/user.model'
import { Contact } from '../models/contact.model';
// import {Move} from 'src/app/models/move.model'

const users: User[] = [{ name: "Ochoa Hyde", coins: 100, moves: [] }]

var currUserIdx: number = 0;

@Injectable({
    providedIn: 'root'
})
export class userService {

    private _users$ = new BehaviorSubject<Array<User>>([])
    public users$ = this._users$.asObservable()

    constructor() {
        this._users$.next(users)
    }

    public getUser(): User {
        return users[currUserIdx]
    }

    public loadUsers(): void {
        let users = this._users$.getValue();
        this._users$.next(users)
    }

    public getCurrUserIdx(): number {
        return currUserIdx
    }

    public addMove(contact: Contact, amount: number): void {
        const move = this._getEmptyMove(contact, amount)
        const user = this.getUser()
        user.moves.push(move)
        user.coins -= amount;
    }

    public signup(name) {
        const user: User = this._getEmptyUser(name.name)
        users.push(user)
        currUserIdx++;
    }

    private _getEmptyUser(name) {
        return {
            name,
            coins: 100,
            moves: []
        }
    }
    private _getEmptyMove(contact, amount) {
        return {
            toId: contact._id,
            to: contact.name,
            at: new Date(),
            amount
        }
    }
}