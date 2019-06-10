// ==UserScript==
// @name           Squirrel Mail Title
// @namespace      http://www.stat.ucla.edu/~nfultz/GM/
// @description    Puts number of unread in title
// @include        https://mail.stat.ucla.edu/src/left_main.php
// ==/UserScript==
//
var inbox = document.evaluate(
    "/html/body/table/tbody/tr/td/span[1]",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null).singleNodeValue.textContent.trim();
top.document.title = inbox + " @stat.ucla.edu";

if(/\d+/.exec(inbox) != null) 
{
	top.frames[1].location.reload();
}
