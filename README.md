<h1>JS.Simple Storage</h1>
<p>
    Simple JS method to get you going with localStorage without an API.
</p>

<h2>How it works</h2>
<p>
    All I can say is why wasn't I using localStorage before...  There are a couple of downsides to it. First, you can only store strings, and second how do you expire data...
</p>
<p>
    This API independent method for providing access to localStorage makes use of JSON.stringify() and JSON.parse() to handle conversion of data. In addition two date/times are
    applied, one for the original creation date of your data and another for when the data was updated.
</p>


<h2>Browser compatibility</h2>
<p>
    Works in Firefox, Chrome, Opera, Safari, and even IE-8. For a full list of compatiability on localStorage check
    <a href="http://caniuse.com/#search=localstorage">Can I Use</a>.
</p>

<h2>License</h2>
<p>
    Ignoring a license on this project since I merely pieced together aspects and I'm unsure where the pattern may have originated (feel free to help me update any kudos).
</p>
<p>
    I did include an API independent "extend" method, feel free to replace with your own, though the one included is pretty snappy.
    I pieced this one together from user <a href="http://stackoverflow.com/users/86296/kamarey">Kamarey's</a> answer from this
    <a href="http://stackoverflow.com/questions/122102/most-efficient-way-to-clone-an-object">Stackoverflow question</a>.
    Also I included in the demo <a href="http://necolas.github.com/normalize.css">Normalize.css</a> and the box model tweak from
    <a href="http://www.paulirish.com/2012/box-sizing-border-box-ftw/">Paul Irish</a> for general formatting purposes.
</p>
