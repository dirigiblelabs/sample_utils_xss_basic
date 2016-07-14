/* globals $ */
/* eslint-env node, dirigible */

var xss = require('utils/xss');
var response = require('net/http/response');

var raw = 'a\'b,c|d;e"f';
var escaped = xss.escapeCsv(raw);
response.println("CSV");
response.println(raw);
response.println(escaped);

raw = '<br><lt>';
escaped = xss.escapeHtml(raw);
response.println();
response.println("HTML");
response.println(raw);
response.println(escaped);

raw = '"hi" I\'m John';
escaped = xss.escapeJavaScript(raw);
response.println();
response.println("JavaScript");
response.println(raw);
response.println(escaped);

raw = "John's bag";
escaped = xss.escapeSql(raw);
response.println();
response.println("SQL");
response.println(raw);
response.println(escaped);

raw = "<tag>";
escaped = xss.escapeXml(raw);
response.println();
response.println("XML");
response.println(raw);
response.println(escaped);


response.flush();
response.close();