/**
 * SimpleStorage Plugin
 * Copyright 2013, CDCabrera, menotyou.com
 * licensed under MIT license, http://opensource.org/licenses/mit-license.php
 */

(function(window, $, undefined){

    $.simpleStorage = (function()
    {
        //-- store and return data
        function getSetData( name, data, version )
        {
            var current  = new Date().getTime(),
                original = current,
                tempobj  = {};

            version = (typeof version == 'number')? version : 0.1;

            if(localStorage[name])
            {
                tempobj = JSON.parse(localStorage[name]);
            }

            if( data !== undefined )
            {
                tempobj = $.extend(tempobj, { version:version, set:( tempobj.set || original ), updated:current, data:data });
                try
                {
                    localStorage[name] = JSON.stringify(tempobj);
                }
                catch(e)
                {}
            }

            return tempobj;
        }

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
                return (this.store && typeof name == 'string')? getSetData.call(this,name,data,version) : null;
            }
        };
    })();

})(this, jQuery);