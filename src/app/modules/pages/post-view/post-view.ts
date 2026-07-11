import { Component, input } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-post-view',
  imports: [MarkdownComponent],
  templateUrl: './post-view.html',
  styleUrl: './post-view.css',
})
export class PostView {
  readonly filename = input.required<string>();
}
