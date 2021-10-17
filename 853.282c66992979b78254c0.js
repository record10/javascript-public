"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[853],{853:(n,e,s)=>{s.r(e),s.d(e,{title:()=>a,story:()=>t});const a="Array",t='\n<div>\n    <div class="section">\n        Technically Object can be anything, string, number, boolean, function, object, array, etc.\n        <br>\n        <b>But here we are talking about the object which consist of key and value pairs. </b>\n        <br>\n        <code>\n            let user = new Object("dan"); // <span class="text-success">// This is string object</span>\n        </code>\n        But this is not the one we are interested in.\n        <hr>\n        <code>\n            let user = new Object(); // <span class="text-success">// This is object</span> <br>\n            user.name = "dan"; <br>\n            user.age = 30; <br>\n        </code>\n        <hr>\n        OR \n        <hr>\n        <code>\n            let user = {} // <span class="text-success">// This is object using literal syntax</span> <br>\n            user.name = "dan"; <br>\n            user.age = 30; <br>\n        </code>\n\n        <hr>\n        OR \n        <hr>\n\n        <code>\n            let user = {"name":"dan", "age":30} // <span class="text-success">// This is object using literal syntax with initialized values</span> <br>\n        </code>\n\n        \n    </div>\n\n    <div class="section">\n        <b>Methods we can use on objects</b>\n        <hr>\n        <ul>\n            <li>\n                <code>\n                    <b>Object.keys()</b>\n                    <br>\n                    <span class="text-secondary">//returns an array of keys</span>\n                    <br>\n                    <pre>\nconst obj = {name: "John", age: 30, city: "New York"};\nconst keys = Object.keys(obj);\nconsole.log(keys); <span class="text-success">// ["name", "age", "city"]</span>\n                    </pre>\n                </code>\n            </li>\n            <li>\n                <code>\n                    <b>Object.values()</b>\n                    <br>\n                    <span class="text-secondary">//returns an array of values</span>\n                    <br>\n                    <pre>\nconst obj = {name: "John", age: 30, city: "New York"};\nconst values = Object.values(obj);\nconsole.log(values); <span class="text-success">// ["John", 30, "New York"]</span>\n                    </pre>\n                </code>\n            </li>\n            <li>\n                <code>\n                    <b>Object.entries()</b>\n                    <br>\n                    <span class="text-secondary">//returns an array of key and value pairs</span>\n                    <br>\n                    <pre>\nconst obj = {name: "John", age: 30, city: "New York"};\nconst entries = Object.entries(obj);\nconsole.log(entries); <span class="text-success">// [["name", "John"], ["age", 30], ["city", "New York"]]</span>\n                    </pre>\n                </code>\n            </li>\n        </ul>\n    </div>\n\n\n</div>\n    '}}]);