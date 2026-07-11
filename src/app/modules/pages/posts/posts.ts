import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type PostStruct = {
  filename: string;
  date: string;
  tags?: string[];
};


@Component({
  selector: 'app-posts',
  imports: [RouterLink],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  // TODO: Replace hard coded posts with dynamically generated ones
  readonly posts: PostStruct[] = [
    {
      filename: 'test.md',
      date: '1-1-2005'
    },
    {
      filename: 'test.md',
      date: '1-1-2005'
    },
  ]
}
