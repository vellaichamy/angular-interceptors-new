import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html'
})
export class RetryComponent implements OnInit {
  data: Observable<any>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.data = this.httpClient.get('https://example.com/404').pipe(
      catchError(err => of('there was an error'))
    );
  }
}