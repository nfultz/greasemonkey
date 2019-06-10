// ==UserScript==
// @name           Squirrel Mail Search Box
// @namespace      http://www.stat.ucla.edu/~nfultz/GM/
// @description    Adds a search box to Squirrel Mail
// @include        https://mail.stat.ucla.edu/src/left_main.php
// ==/UserScript==
//

var searchBox = document.createElement("SPAN");

searchBox.innerHTML = '\
<BR/>								\
<form action="search.php" name="s" target="right">		\
  <input type="hidden" name="mailbox" value="archive"/>		\
  <label for="what">Search:</label>				\
  <input type="text" name="what" value="" size="12"/>		\
  <input type="hidden" name="where" value="TEXT"/>		\
</form>								\
';

document.body.appendChild(searchBox);
