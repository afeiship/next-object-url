# next-object-url
> URL create/destroy for blob object

## installation
```bash
npm install -S afeiship/next-object-url --registry=https://registry.npm.taobao.org
```

## apis
| api    | params           | description                |
| ------ | ---------------- | -------------------------- |
| create | (object,options) | window.URL.CreateObjectURL |

## usage
```js
import NxObjectUrl from 'next-object-url';

const res = NxObjectUrl.create(obj,options);

// property ( blob:http://localhost:3000/5a15f3fc-8d52-45e4-9047-6cd941695a78)
res.url
// method
res.destroy()
```
## demo
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
