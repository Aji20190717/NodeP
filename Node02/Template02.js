var a = 1;      // 숫자 1을 표현하는 literal
var b = '1';    // 문자 1을 표현하는 literal

// literal : 정보를 표현하는 기호, 방법
// ` : template literal의 시작과 끝을 표현하는 기호
//   : <p> 처럼 적힌 그대로의 모양으로 적용된다.

var name = 'Node.js';
var Thymeleaf = `Thymeleaf is a modern server-side Java template engine
for both web and standalone environments.

${name}

Thymeleaf's main goal is to bring elegant natural
templates to your development workflow 
— HTML that can be correctly displayed in browsers
and also work as static prototypes,
allowing for stronger collaboration in development teams.
${1+1}
With modules for Spring Framework, 
a host of integrations with your favourite tools,
and the ability to plug in your own functionality, 
Thymeleaf is ideal for modern-day HTML5 JVM web development 
— although there is much more it can do.`;

console.log(Thymeleaf);



