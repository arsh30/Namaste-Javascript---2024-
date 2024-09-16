/*
They are boolean attributes which are used with script tags to load the external scripts into the webpage 

when we load the webpage, in the browser 2 major things happen in browser 
1. HTML parsing 
2. Loading Scripts  --> fetching the script from network 
                    --> executing the script line by line


-----------

1. 
<script src= " "/> -> // When the browser is parsing the HTML and encounters a <script src=" "> tag without async or defer, 
it pauses HTML parsing immediately. The browser then fetches the script from the network. 
Once the script is fetched, it is executed immediately. Only after the script has finished 
executing does the browser resume parsing the HTML. This can delay the rendering of the page, 
as the browser must wait for the script to be downloaded and executed before continuing with the
 HTML parsing.

2. 
<script async src=" "/> //  When a <script> tag has the async attribute, the script is fetched from the network asynchronously
 while the HTML parsing continues. Once the script is fetched, it is executed immediately, without waiting for the HTML parsing to finish. After the script execution,
  the browser resumes parsing the HTML. This allows the script to be executed as soon as it's available, potentially improving page load performance.
  

3.
<script defer src=" "/> // If a <script> tag has the defer attribute, the script is also fetched asynchronously, 
// but it is executed only after the HTML parsing is complete.



NOTE: 
1. async attribute - does not guarantee the order of execution of scripts but defer does 
means when we are using multiple scripts which are depending on each other, then using the async tag 
does not guarantee that they will executing in particular order, so in that case we use defer

2. suppose we have to use external scripts like GoogleAnalytics scripts, which are independent 
so in that case, we use async attribute

3. mostly other wise we use defer attribute, because it maintains the order of execution of scripts.

----------- finish -------
*/


