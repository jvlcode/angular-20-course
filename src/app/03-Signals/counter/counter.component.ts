import { Component, computed, Signal, signal, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  count = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });
  }

  increment() {
    this.count.set(this.count() + 1);
  }


}
