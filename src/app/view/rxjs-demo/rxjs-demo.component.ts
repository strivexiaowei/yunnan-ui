import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.scss']
})
export class RxjsDemoComponent implements OnInit {

  persons = [
    { name: 'Dave', age: 34, salary: 2000 },
    { name: 'Nick', age: 37, salary: 32000 },
    { name: 'Howie', age: 40, salary: 26000 },
    { name: 'Brian', age: 40, salary: 30000 },
    { name: 'Kevin', age: 47, salary: 24000 },
  ];
  subjectStr$ = new Subject();
  constructor() { }

  ngOnInit() {
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

  getFromBaidu(): Observable<any> {
    return Observable.create(function subscribe(observer) {
      observer.next('https://www.baidu.com');
      observer.complete();
    });
  }
}
