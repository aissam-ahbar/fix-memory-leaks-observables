import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  // Create an observable that emits a value every 1s = 1000 ms.
  // This observable will be unsubscribed & destroyed with async pipe on HTML
  public observable1$: Observable<number> = interval(1000);

  // Subscription
  public observable2$: Observable<string> = of('');
  private subscription: Subscription = new Subscription();

  ngOnInit() {
    this.subscription = this.observable2$.subscribe(console.log);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
