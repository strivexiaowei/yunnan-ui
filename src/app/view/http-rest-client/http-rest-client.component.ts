import { Component, OnInit } from '@angular/core';
import { RestClientService } from '@shared/service/rest-client.service';
@Component({
  selector: 'app-http-rest-client',
  templateUrl: './http-rest-client.component.html',
  styleUrls: ['./http-rest-client.component.scss']
})
export class HttpRestClientComponent implements OnInit {

  constructor(private restClient: RestClientService) { }

  ngOnInit() {
  }
  sendHttp() {
    this.restClient.request('aa', 'bb', 'cc', {}).subscribe(res => {
      console.log(res);
    });
  }

}
