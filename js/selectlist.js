/**
 * @author Justin
 */
require(["dojo/ready", "dijit/form/MultiSelect", "dijit/form/Button", "dojo/dom", "dojo/_base/window"], function(ready, MultiSelect, Button, dom, win){
    ready(function(){
        var sel = dom.byId('contentlist');
        //this will need to be changed to add the selectable list from the query
        
        
        //input a list below to get it to appear -- test this list soon
        var n = 0;
        
        for(var i in dijit){
            var c = win.doc.createElement('option');
            c.innerHTML = i;
            c.value = n++;
            sel.appendChild(c);
        }
        var myMultiSelect = new MultiSelect({ name: 'contentlist' }, sel);

        new Button({
            onClick: function(){
                alert(myMultiSelect.get('value'));
            }
        }, "progbutton");
    });
});