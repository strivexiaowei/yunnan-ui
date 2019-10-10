# search-select 下拉搜索

基于蚂蚁金服的下拉实现中文和英文搜索的方法

参考文档https://ng.ant.design/components/select/zh

使用方法

```typescript
import { pinYin, hanZi } from '@assets/js/pinYin';
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
```
```html
<nz-select style="width: 120px;" nzAllowClear nzShowSearch [nzFilterOption]="_filter" nzPlaceHolder="请选择">
  <nz-option *ngFor="let option of selectOption"  [nzValue]="option.id" [nzLabel]="option.name"></nz-option>
</nz-select>
```
实例
