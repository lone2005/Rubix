---
order: 3
title: 吊顶规范
---

吊顶一般用于跨系统/应用场景，可以放置统一的登录/帮助信息。

吊顶背景深色，高度 `30px`，和浅色调的主导航配合使用。

````jsx
import { Menu, Breadcrumb } from 'antd';
import BrowserDemo from 'site/component/BrowserDemo';

ReactDOM.render(
  <BrowserDemo>
    <div className="rubix-layout-ceiling-demo">
      <div className="rubix-layout-ceiling">
        <div className="rubix-layout-wrapper">
          <ul className="right">
            <li>xxx@example.com</li>
            <li>|</li>
            <li>帮助中心</li>
            <li>|</li>
            <li>客服/投诉电话：400-826-7710</li>
          </ul>
        </div>
      </div>
      <div className="rubix-layout-header">
        <div className="rubix-layout-wrapper">
          <div className="rubix-layout-logo"></div>
        </div>
      </div>
    </div>
  </BrowserDemo>
, mountNode);
````

````css
.rubix-layout-ceiling-demo {
  height: 100%;
}

.rubix-layout-ceiling {
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  background-color: #242736;
  color: #ddd;
}

.rubix-layout-ceiling .right {
  float: right;
}

.rubix-layout-ceiling ul li {
  display: inline-block;
  margin: 0 4px;
}

.rubix-layout-ceiling-demo .rubix-layout-wrapper {
  padding: 0 50px;
}

.rubix-layout-ceiling-demo .rubix-layout-header {
  background: #fff;
  height: 64px;
  border-bottom: 1px solid #d9d9d9;
}

.rubix-layout-ceiling-demo .rubix-layout-logo {
  width: 120px;
  height: 32px;
  background: #eee;
  border-radius: 6px;
  margin: 16px 28px 16px 0;
  float: left;
}
````
