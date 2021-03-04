# next-object-url
> URL create/destroy for blob object.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-object-url
```

## apis
| api    | params           | description                |
| ------ | ---------------- | -------------------------- |
| create | (object,options) | window.URL.CreateObjectURL |

## usage
```js
import NxObjectUrl from '@jswork/next-object-url';

const res = NxObjectUrl.create(obj,options);

// property ( blob:http://localhost:3000/5a15f3fc-8d52-45e4-9047-6cd941695a78)
res.url
// method
res.destroy()
```

```html
<input type="file" name="test" id="test1" />
<img id="img1" src="https://via.placeholder.com/200x100" />
<script src="/next-js-core2/dist/next-js-core2.js"></script>
<script src="/next-object-url.js"></script>
<script>
  var fileEl = document.getElementById('test1');
  var img1 = document.getElementById('img1');

  fileEl.onchange = function(e) {
    var file = e.target.files[0];
    var res = nx.ObjectUrl.create(file);
    // console.log(file, img1);
    img1.src = res.url;
    img1.onload = function() {
      res.destroy();
    };
  };
</script>
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-object-url/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-object-url
[version-url]: https://npmjs.org/package/@jswork/next-object-url

[license-image]: https://img.shields.io/npm/l/@jswork/next-object-url
[license-url]: https://github.com/afeiship/next-object-url/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-object-url
[size-url]: https://github.com/afeiship/next-object-url/blob/master/dist/next-object-url.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-object-url
[download-url]: https://www.npmjs.com/package/@jswork/next-object-url
