import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Globals } from '../../../globals';

@Component({
  selector: 'app-posts',
  imports: [RouterLink],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  // TODO: Replace hard coded posts with dynamically generated ones
  globals = inject(Globals);
  posts = this.globals.posts;
}
