!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n){e.exports=require("mongoose")},function(e,n){e.exports=require("body-parser")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("axios")},function(e,n){e.exports=require("dotenv")},function(e,n,t){"use strict";t.r(n);var r=t(3),o=t.n(r),i=t(1),u=t(2),c=t(0),d=new c.Schema({url:String}),s=c.model("Dog",d);t(4).load();var f=u();c.connect("mongodb://vironitdb:"+process.env.mngdbpswd+"@ds161411.mlab.com:61411/vironitdb"),f.use(i.json()),f.use(i.urlencoded({extended:!0})),f.set("view engine","ejs"),f.use(u.static("public")),f.get("/",function(e,n){o.a.get("https://dog.ceo/api/breeds/image/random").then(function(e){s.find({},function(t,r){n.render("index",{dogObject:e.data,dogImages:r})})})}),f.post("/",function(e,n){var t=e.body.string;s.create({url:t},function(e,t){n.redirect("/")})}),f.listen(3e3,"localhost",function(){return!0})}]);