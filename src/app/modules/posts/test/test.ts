import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-test',
  imports: [MarkdownComponent],
  providers: [],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {}
