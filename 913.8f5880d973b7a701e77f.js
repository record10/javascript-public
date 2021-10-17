"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[913],{870:(n,e,s)=>{s.r(e),s.d(e,{title:()=>t,story:()=>o});const t="JSON",o='\n<div>\n    <div class="section">\n        <b>JSON</b> stands for <i>JavaScript Object Notation</i>.\n        <br>\n        It is a text-based format for storing and exchanging data over web/internet.\n        <br>\n        It is highly used data type in any Javascript application, and it has gained popularity in all other languages\n        too.\n        <code>\n            JSON has two methods to convert data into JSON format and vice versa.\n            <ul>\n                <li>JSON.parse()</li>\n                <li>JSON.stringify()</li>\n            </ul>\n        </code>\n    </div>\n\n    <div class="section">\n        <b> <code>JSON.parse()</code> is used to convert JSON string into JavaScript object</b>\n        <br>\n            <br>\n<b>Sample 1 (Object) </b> <span class="text-secondary"># Note. Object is nothing but collection of key and values ({key:value}) where keys are distinct.</span>\n<code>\n    <pre>\n\n    const jsonString = \'{"name":"John", "age":30, "city":"New York"}\'; <span class="text-success">// JSON string (this is plain text but looks like object)</span>\n    const obj = JSON.parse(jsonString);\n    console.log(obj); <span class="text-success">// {name: "John", age: 30, city: "New York"} # this is JSON object</span>\n    </pre>\n</code>\n\n        <b>Sample 2 (Array)</b>\n<code>\n    <pre>\n\n    const jsonString = \'[{"name":"John", "age":30, "city":"New York"},{"name":"Mike", "age":23, "city":"New York"}]\'; <span class="text-success">// JSON string</span>\n    const obj = JSON.parse(jsonString);\n    console.log(obj); <span class="text-success">// [{name: "John", age: 30, city: "New York"}, {name: "Mike", age: 23, city: "New York"}] # this is JSON array</span>\n    </pre>\n</code>\n    </div>\n\n    <div class="section">\n        <b> <code>JSON.stringify()</code> is used to convert Object/Array into Json string</b>\n        <br>\n            <br>\n<b>Sample 1 (Object) </b> \n<code>\n    <pre>\n    const obj = {name: "John", age: 30, city: "New York"}; <span class="text-success">// JSON object</span>\n    const jsonString = JSON.stringify(obj);\n    console.log(jsonString); <span class="text-success">// \'{"name":"John", "age":30, "city":"New York"}\' # this is string</span>\n    </pre>\n</code>\n\n        <b>Sample 2 (Array)</b> \n<code>\n    <pre>\n    const obj = [{name: "John", age: 30, city: "New York"}, {name: "Mike", age: 23, city: "New York"}]; <span class="text-success">// JSON array</span>\n    const jsonString = JSON.stringify(obj);\n    console.log(jsonString); <span class="text-success">// \'[{"name":"John", "age":30, "city":"New York"},{"name":"Mike", "age":23, "city":"New York"}]\' # this is string</span>\n    </pre>\n</code>\n        </pre>\n    </div>\n\n    <div class="section">\n        We use json object for using data in our application.\n        <br>\n        and we use json string for sending/receiving data to/from server.\n        <br>\n    </div>\n\n\n    <div class="section">\n        When we convert JSON string into JSON object, we get JavaScript object.\n        <br>\n        and we also get the methods of JavaScript object.\n        <br>\n    </div>\n    \n</div>\n'}}]);