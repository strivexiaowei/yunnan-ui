import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of, BehaviorSubject } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import { first, map, take, tap } from 'rxjs/operators';
import { interval } from 'rxjs';
@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.scss']
})
export class RxjsDemoComponent implements OnInit {
  paracont = '倒计时10秒';
  noClick = false;
  keyValue: string;
  inputValue: string;
  mySubject: Subject<Event> = new Subject();
  subject = new BehaviorSubject(0);
  persons = [
    { name: 'Dave', age: 34, salary: 2000 },
    { name: 'Nick', age: 37, salary: 32000 },
    { name: 'Howie', age: 40, salary: 26000 },
    { name: 'Brian', age: 40, salary: 30000 },
    { name: 'Kevin', age: 47, salary: 24000 },
  ];
  subjectStr$ = new Subject();
  constructor() {
    // subscriber 1
    this.mySubject.filter(({ type }) => type === 'keyup')
      .map(e => (<KeyboardEvent>e).key)
      .subscribe(value => this.keyValue = value);

    // subscriber 2
    this.mySubject.filter(({ type }) => type === 'input')
      .map(e => (<HTMLInputElement>e.target).value)
      .subscribe(value => this.inputValue = value);
      this.subject.subscribe({
        next: v => console.log(`Observer1: ${v}`)
    })
  }

  ngOnInit() {
    this.subjectStr$.subscribe(res => {
      console.log(res);
    });
  }

  getFrom() {
    let index = 1;
    Observable.from(this.persons)
      .subscribe(
        person => {
          console.log(index++, person);
        },
        err => console.log(err),
        () => console.log('Streaming is over.')
      );
  }

  getCreate() {
    return Observable.create(observer => {
      this.persons.forEach(p => observer.next(p));
      observer.complete();
    })
  }

  getCreateDom() {
    console.log('sdssd');
    this.getCreate().subscribe(
      person => console.log(person.name),
      err => console.error(err),
      () => console.log('Streaming is over.')
    );
  }

  getReduce() {
    Observable.from(this.persons)
      .map(p => p.salary)
      .reduce((total, current) => total + current, 0)
      .subscribe(totalSalary => {
        console.log(totalSalary);
      },
        err => console.log(err)
      )
  }

  getCatch() {
    console.log('错误处理');
    this.getFromGoogle()
      .catch(err => {
        console.error(`Error: ${err.status}: ${err.message}`);
        if (err.status === 404) {
          return this.getFromBaidu();
        } else {
          return this.getFromBing();
        }
      })
      .map(x => `The site is : ${x}`)
      .subscribe(
        x => console.log('Subscriber got: ' + x),
        err => console.error(err),
        () => console.log('The stream is over.')
      );
  }

  getFromGoogle(): Observable<any> {
    return Observable.create(function subscribe(observer) {
      observer.next('https://google.com');
      observer.error({
        message: 'Google can\'t be reached.',
        status: 404,
      });
      observer.complete();
    });
  }

  getFromBing(): Observable<any> {
    return Observable.create(function subscribe(observer) {
      observer.next('https://global.bing.com');
      observer.complete();
    });
  }

  getMapOf() {
    map((x: number) => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
  }

  getFirstOf() {
    first()(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
  }

  getFromBaidu(): Observable<any> {
    return Observable.create(function subscribe(observer) {
      observer.next('https://www.baidu.com');
      observer.complete();
    });
  }

  getSubject() {
    this.subjectStr$.next('你是真的好么');
  }

  getPipe($event) {
    // Observable.from($event).pipe(
    //   take(1),
    //   tap(v => console.log(v))
    // )
  }

  getTake() {
    // 每1秒发出值
    const interval$ = interval(1000);
    // 取前5个发出的值
    const example = interval$.pipe(take(10));
    // 输出: 0,1,2,3,4
    const subscribe = example.subscribe(
      val => {
        this.noClick = true;
        this.paracont = `倒计时${10 - val}秒`
      },
      error => { },
      () => {
        this.noClick = false;
        this.paracont = '重新发送验证码'
      }
    );
  }

  getBehaviorSubject() {
    this.subject.next(2);
  }

}
