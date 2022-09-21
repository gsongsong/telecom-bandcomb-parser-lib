# bandcomb-parser

3GPP E-UTRA, MR-DC and NR band combination related capabilities parsing library

## Usage

```sh
npm install bandcomb-parser
```

```js
import { parserPcap } from "bandcomb-parser";
const { eutra, mrdc, nr } = parserPcap(pcapString);
```
