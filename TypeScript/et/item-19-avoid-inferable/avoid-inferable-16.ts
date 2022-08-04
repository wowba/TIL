const cacheC: {[ticker: string]: number} = {};
function getQuoteD(ticker: string) {
  if (ticker in cacheC) {
    return cacheC[ticker];
  }
  return fetch(`https://quotes.example.com/?q=${ticker}`)
      .then(response => response.json())
      .then(quote => {
        cacheC[ticker] = quote;
        return quote;
      });
}
function considerBuying(x: any) {}
getQuote('MSFT').then(considerBuying);
              // ~~~~ Property 'then' does not exist on type
              //        'number | Promise<any>'
              //      Property 'then' does not exist on type 'number'

// 함수에 반환값에 타입을 명시하여 정확한 위치에 에러 표시 

const cacheD: {[ticker: string]: number} = {};
function getQuote(ticker: string): Promise<number> {
  if (ticker in cacheD) {
    return cacheD[ticker];
        // ~~~~~~~~~~~~~ Type 'number' is not assignable to 'Promise<number>'
  }
  // COMPRESS
  return Promise.resolve(0);
  // END
}

// 반환 타입을 명시하지 않으면 입력값과 출력값이 다를 수 있으며 혼란 야기.

interface Vector2D { x: number; y: number; }
function add(a: Vector2D, b: Vector2D) {
  return { x: a.x + b.x, y: a.y + b.y };
}
