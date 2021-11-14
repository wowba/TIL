## import, export 순서

Node.js 에서는 각각의 파일이 각각의 module 이라고 생각하면 편하다.

파일을 import 하기 위해선 먼저 가져오고자 하는 파일을 export 해 주어야 한다.

내보내는 방법에는 에는 2가지가 있는데, export default와 export가 있고 방법이 약간 다르다.

## export default

export default는 파일 전체를 내보내는 것이기 때문에

불러올 때 해당 변수 이름을 아무렇게나 해도 상관 없다.

```
const king = "king";

export default king;
```

아래 두개 코드 다 동일한 변수를 불러온다.

```
import queen from "../../..";
```

```
import look from "../../..";

```

## export

export는 해당 변수만을 불러오기에 import 할 때 정확한 변수 명을 입력해 주어야 한다.

```
export const king = "king"
```

```
import { king } from "../../.."
```

## ./ 과 ../

./ 은 현재 폴더에서 움직이는 것,
../ 은 이전 폴더로 가서 움직이는 것.
