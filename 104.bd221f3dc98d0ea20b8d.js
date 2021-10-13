"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[104],{104:(r,e,a)=>{a.r(e),a.d(e,{title:()=>n,story:()=>o});const n="Functions",o='\n<div>\n    <div class="section">\n        Function is way to group a series of statements together to perform a particular task.\n        <br>\n        Following are the way\'s we can define a function in JavaScript\n        <hr>\n        <code>\n            <pre>\nfunction functionName(param1, param2) {\n    console.log(param, param2)\n    // statements\n}\n            </pre>\n        </code>\n\n        To call a function, we use the function name followed by parenthesis.\n        <hr>\n        <code>\n            <pre>\nfunctionName(param1, param2);\n            </pre>\n        </code>\n    </div>\n\n    <div class="section">\n        Another way (Modern) : Define a function as variable.\n        <hr>\n        <code>\n            <pre>\nlet functionName = (param, param2)=>{ console.log(param, param2) }\n            </pre>\n        </code>\n\n        To call a function, we use the function name followed by parenthesis.\n        <hr>\n        <code>\n            <pre>\nfunctionName(param1, param2);\n            </pre>\n        </code>\n\n        Here in Modern way<br>\n        <code>(param, param2)=>{ console.log(param, param2) }</code> is an anonymous function and we are assigning it to a variable.\n    </div>\n\n\n    <div class="section">\n        In above Examples we have defined a function named <b>functionName</b> with two parameters.\n        <br>\n        And <b>param1</b> and <b>param2</b> are the arguments that we pass to the function.\n        <br>\n        We can also define a function without any parameters.\n        <br>\n        Or we can pass any number of parameters to the function.\n    </div>\n\n    <div class="section">\n        Example -\n        <hr>\n        <code>\n            <pre>\nlet addTwoNumbers = (number1, number2)=>{ return number1 + number2 }\n            </pre>\n        </code>\n        <code>\n            <pre>\nlet result = addTwoNumbers(10, 20);\nconsole.log(result); // 30 \n            </pre>\n        </code>\n    </div>\n</div>\n'}}]);