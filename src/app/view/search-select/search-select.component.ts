import { pinYin, hanZi } from '@assets/js/pinYin';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss']
})
export class SearchSelectComponent implements OnInit {
  selectOption = [
    { name: '中国', id: 'dadafaa' },
    { name: '美国', id: 'dadafsaa' },
    { name: '伊拉克', id: 'daafdafaa' },
    { name: '法国', id: 'dadafafaga' },
    { name: '土耳其', id: 'dadafjaa' },
    { name: '日本', id: 'dadafakla' },
    { name: '韩国', id: 'dadafaafs' },
    { name: '泰国', id: 'dgsadafsfaa' },
    { name: '澳大利亚', id: 'dadshfsjherafaa' },
    { name: '乌克兰', id: 'dadafsfshdfaa' }
  ];
  constructor() {}

  ngOnInit() {}

  // 拼音搜索
  _filter(input?: string, option?) {
    const pinyin = SearchSelectComponent.prototype.ConvertPinyin(
      option.nzLabel
    );
    if (!input) {
      return false;
    }
    if (pinyin.match(input)) {
      return true;
    }
    if (option.nzLabel.match(input)) {
      return true;
    }
    return false;
  }
  // 汉字转拼音
  ConvertPinyin(str: any) {
    const length = str.length;
    let pinyinStr = '';
    const reg = new RegExp('[a-zA-Z0-9- ]');
    for (let i = 0; i < length; i++) {
      const s = str.substr(i, 1);
      const index = hanZi.indexOf(s);
      if (reg.test(s)) {
        pinyinStr += s;
      } else if (index >= 0) {
        const pinyinVal = pinYin[index];
        pinyinStr += pinyinVal.substr(0, 1);
      }
    }
    pinyinStr = pinyinStr.replace(/ /g, '-');
    while (pinyinStr.indexOf('--') > 0) {
      pinyinStr = pinyinStr.replace('--', '-');
    }
    return pinyinStr;
  }

  scrollBottom() {
    console.log('hehe');
    this.selectOption = [...this.selectOption, ...this.selectOption];
  }
}
