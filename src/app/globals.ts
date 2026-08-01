import { Injectable } from '@angular/core';

export type PostStruct = {
  filename: string;
  date: string;
  tags?: string[];
};

@Injectable({
    providedIn: 'root'
})
export class Globals {
    public readonly posts: PostStruct[] = [
    {
      filename: 'Periodic_Decimal_Expansions.md',
      date: '7-27-2026'
    },
  ]
}
