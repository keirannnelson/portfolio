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
      filename: 'test.md',
      date: '1-1-2005'
    },
  ]
}
