/*
* SimpleStorage Plugin
* Copyright 2013, CDCabrera, menotyou.com
* licensed under MIT license, http://opensource.org/licenses/mit-license.php
*
* Simple extend method modified and repackaged from several answers here,
* http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
*
*/

window.simplestorage = (function(window, undefined)
{
    //-- simple extend method for an object, drop in your own version
    function extend(){return(function m(a){var b={},src,p,c=function(v){return(v!==undefined&&v!==null&&v.constructor==Object)};while(a.length>0){src=a.shift();if(c(src)){for(p in src){if(src.hasOwnProperty(p)){if(c(src[p])){b[p]=m([(b[p]||{}),src[p]])}else{b[p]=src[p]}}}}}return b})(Array.prototype.slice.call(arguments,0))}


    //-- store and return data
    function getsetdata( name, data, version )
    {
        var current  = new Date().getTime(),
            original = current,
            tempobj  = {};

        version = (typeof version == 'number')? version : 0.1;

        if(localStorage[name])
        {
            tempobj = JSON.parse(localStorage[name]);
        }

        if( data != undefined )
        {
            tempobj = extend(tempobj, { version:version, set:( tempobj.set || original ), updated:current, data:data });
            localStorage[name] = JSON.stringify(tempobj);
        }

        return tempobj;
    }


    //-- expose
    return {
        store : ('localStorage' in window && 'JSON' in window),

        clear : function(name)
        {
            if(this.store)
            {
                if( typeof name == 'string' )
                {
                    localStorage[name] = '{}'; //-- clear specific
                }
                else
                {
                    localStorage.clear(); //-- clear all
                }
            }
        },

        get : function(name)
        {
            return this.set.call(this,name);
        },

        set : function(name,data,version)
        {
            return (this.store && typeof name == 'string')? getsetdata.call(this,name,data,version) : null;
        }
    };

})(this);