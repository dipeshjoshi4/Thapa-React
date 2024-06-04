react does not render 'false', 'null','undefined' or 'NaN' in the DOM.
these values,when used in JSX,will result in nothing being displayed

however,'0' and empty strings (`""`) are exceptions:

- **`0`** is rendered in the DOM because it is consideread a  valid react node.this means that if `0` is the result------------expression,it will appear in your UI

- **empty strings**(`""`) are also considered valid----------- and are renderead as well