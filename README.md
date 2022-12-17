# Fix Observables leaks to render data asynchronously

Observables allows to render data asynchronously.
But, if you do not use them properly, you can create leaks.

### 1) Fix memory leaks on Observable using Async Pipe

```ts
# app.component.ts
public observable1$: Observable<number> = interval(1000);
```

```ts
# app.component.html (unsubscribed automatically)
{{ observable$ | async }}
```

### 2) Fix memory leaks on Observable on Component Destroy (ngOnDestroy hook)

```ts
public observable$: Observable<string> = of('');
private subscription: Subscription = new Subscription();

ngOnInit() {
  this.subscription = this.observable$.subscribe(console.log);
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}
```
