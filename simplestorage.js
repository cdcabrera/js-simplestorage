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
    function store( namespace, data, clear )
    {
        var current  = new Date().getTime(),
            original = current,
            tempobj  = {};

        if(clear)
        {
            localStorage[namespace] = '{}';
        }
        else
        {
            if(localStorage[namespace])
            {
                tempobj = JSON.parse(localStorage[namespace]);
            }

            if( data != undefined )
            {
                tempobj = extend(tempobj, { set:( tempobj.set || original ), updated:current, data:data });
                localStorage[namespace] = JSON.stringify(tempobj);
            }
        }

        return tempobj;
    }


    //-- expose
    return {
        store : ('localStorage' in window && 'JSON' in window),

        clear : function()
        {
            if( arguments[0] != undefined )
            {
                store.call(this,arguments[0],null,true); //-- clear a specific stored item
            }
            else if(this.store)
            {
                localStorage.clear(); //-- clear all local storage
            }
        },

        get : function()
        {
            return this.set.call(this,arguments[0]);
        },

        set : function(name,value)
        {
            return (this.store)? store.call(this,name,value) : null;
        }
    };

})(this);