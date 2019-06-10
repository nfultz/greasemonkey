// ==UserScript==
// @name           Squirrel Mail archive button
// @namespace      http://www.stat.ucla.edu/~nfultz/GM
// @description    Adds an archive button to Squirrel Mail List view
// @include        https://mail.stat.ucla.edu/src/read_body.php*
// ==/UserScript==
//


targs = location.search.split(/[?&=]/);

var args = [];
for(var i = 1; i < targs.length; i+=2)
{
	var key = targs[i];
	var value = targs[i+1];
	args[key] = value;
}


var archive = '										\
<form action="move_messages.php" name="FormMsgs%2" method="post" style="display:inline">	\
  <input type="hidden" name="targetMailbox" value="archive"/>				\
  <input type="hidden" name="startMessage" value="1"> 					\
  <input type="hidden" name="msg[0]" value="%1" id="msg%1" selected="true"/>		\
  <input type="hidden" name="mailbox" value="%2"/>					\
  <input type="hidden" name="location" value="/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=%2"/> \
  <button type="submit" name="moveButton" value="Move"/>Archive</button>		\
</form>											\
';

var contact = ' \
<form action="addressbook.php" method="post" name="f_add">	\
	<input name="addaddr[nickname]" value="%nick" size="15" type="hidden">	\
	<input name="addaddr[email]" value="%addr" size="45" type="hidden">	\
	<input name="addaddr[firstname]" value="%first" size="45" type="hidden">	\
	<input name="addaddr[lastname]" value="%last" size="45" type="hidden">	\
	<input name="addaddr[label]" value="" size="45" type="hidden">	\
	<input name="backend" value="1" type="hidden">	\
	<input name="addaddr[SUBMIT]" value="Save Contact" type="submit">	\
</form>	\
';	


var table = document.evaluate(
    "/html/body/table[2]/tbody/tr/td[3]/small",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null).singleNodeValue;

var cell = document.createElement("SPAN");
cell.innerHTML = archive.replace(/%1/g, args.passed_id).replace(/%2/g, args.mailbox);
table.appendChild(cell);

var email = document.evaluate(
    "/html/body/table[3]/tbody/tr[2]/td/table/tbody/tr[2]/td[2]",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null).singleNodeValue;


var x = /("([^"]+)")? ?<([^>]+)>/;
var res = x.exec(email.textContent);
if(res == null) return;
var addr = res[3];
var nick = res[2].replace(/\W/g, "_");
var first = res[2].split(" ")[0]
var last = res[2].split(" ")[1];

var cell = document.createElement("SPAN");
cell.innerHTML = contact.replace(/%nick/, nick)
			.replace(/%addr/, addr)
			.replace(/%first/, first)
			.replace(/%last/, last);
email.appendChild(cell);



