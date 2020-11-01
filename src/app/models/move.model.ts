import { NumberFormatStyle } from '@angular/common';

export interface Move {
  toId: string,
  to: string,
  at: Date,
  amount: number
}