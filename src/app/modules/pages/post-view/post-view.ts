import { Component, inject, input } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { Globals } from '../../../globals';

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
  
  ngOnInit() {
    for (const post of this.globals.posts) {
      if (post.filename == this.filename() + '.md') {
        this.found = true;
        break;
      }
    }
  }
}
