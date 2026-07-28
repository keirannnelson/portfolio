import { Component, inject, input } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { Globals, PostStruct } from '../../../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-view',
  imports: [MarkdownComponent],
  templateUrl: './post-view.html',
  styleUrl: './post-view.css',
})
export class PostView {
  globals = inject(Globals)

  readonly filename = input.required<string>();
  found = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if (!this.globals.posts.filter((post) => post.filename == this.filename() + '.md').length) {
      this.router.navigate(['not-found'], { skipLocationChange: true });
    }
  }
}
