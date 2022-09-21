# telecom-bandcomb-parser-lib

3GPP E-UTRA, MR-DC and NR band combination related capabilities parsing library

## Usage

```sh
npm install telecom-bandcomb-parser-lib
```

```js
import { parserPcap } from "telecom-bandcomb-parser-lib";
const { eutra, mrdc, nr } = parserPcap(pcapString);
```
