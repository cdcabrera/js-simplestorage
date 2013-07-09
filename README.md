<h1>JS.Simple Storage</h1>
<p>
    Simple JS method to get you going with localStorage without an API.
</p>

<h2>How it works</h2>
<p>
    All I can say is why wasn't I using localStorage before...  There are a couple of downsides to it. First, you can only store strings, and second how do you expire data...
</p>
<p>
    This method for providing access to localStorage makes use of JSON.stringify() and JSON.parse() to handle conversion of data. In addition two date/times are
    applied, one for the original creation date of your data and another for when the data was updated.
</p>
<p>
    Something to remember when using this, that whatever you put in you'll get back out. If you input a string you'll get a string. If you input an object, you'll get
    back an object. I had thought about running JSON.stringify on all stored data, but decided against it since there may have been a scenario I couldn't account for. I may
    go back and update the method accordingly. If you're curious about what you can jam in a JSON object view this accepted
    <a href="http://stackoverflow.com/questions/10729258/why-doesnt-json-stringify-display-object-properties-that-are-functions">Stackoverflow answer</a>.
</p>


<h2>Browser compatibility</h2>
<p>
    Works in Firefox, Chrome, Opera, Safari, and IE9+. IE8 is technically supposed to work with storage. However IE8 and JSON.stringify get a little weird
    around compatibility mode. For a full list of browser compatibility regarding localStorage and JSON.stringify check
    <a href="http://caniuse.com/#search=localstorage">Can I Use localStorage</a>, and
    <a href="http://caniuse.com/#search=json.string">Can I Use, JSON.stringify</a>
</p>

<h2>License</h2>
<p>
    Ignoring a license on this project since I merely pieced together aspects and I'm unsure where the pattern may have
    originated (feel free to help me update any kudos).
</p>
<p>
    I did include a simple API independent "extend" method, feel free to replace with your own. I modified and pieced together my own from several answers on this
    <a href="http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically">Stackoverflow question</a>.
</p>
<p>
    Also I included in the demo <a href="http://necolas.github.com/normalize.css">Normalize.css</a> and the box model tweak from
    <a href="http://www.paulirish.com/2012/box-sizing-border-box-ftw/">Paul Irish</a> for general formatting purposes.
</p>
