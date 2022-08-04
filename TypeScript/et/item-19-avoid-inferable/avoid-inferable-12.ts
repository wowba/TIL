// HIDE
namespace express {
  export interface Request {}
  export interface Response {
    send(text: string): void;
  }
}
interface App {
  get(path: string, cb: (request: express.Request, response: express.Response) => void): void;
}
const app: App = null!;
// END

// 함수의 매개변수 또한 기본값을 지정할 경우 타입이 추론된다.

function parseNumber(str: string, base=10) {
  // ...
}


// Don't do this:
app.get('/health', (request: express.Request, response: express.Response) => {
  response.send('OK');
});

// Do this:
app.get('/health', (request, response) => {
  response.send('OK');
});

