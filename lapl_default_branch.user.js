// ==UserScript==
// @name           LAPL default branch
// @namespace      http://www.stat.ucla.edu/~nfultz/GM/
// @description    Preselects the westwood brach
// @include        http://catalog.lapl.org/carlweb/jsp/pickupbranches.jsp
// ==/UserScript==

var westwood = document.evaluate(
    "//option[normalize-space(@value)='WWOOD']",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null);
westwood.singleNodeValue.setAttribute("selected", "true")

