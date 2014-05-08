var win = Ti.UI.createWindow({
	backgroundColor:'white',
	layout: 'vertical',
	exitOnClose: true
});

// require the module
var Crouton = require('de.manumaticx.crouton');

var button_info = Ti.UI.createButton({
    title: 'INFO',
    top: 50
});
button_info.addEventListener('click', function(){
    // show a Crouton and forget about it
    Crouton.info("This is a simple info Crouton");
});
win.add(button_info);

var button_alert = Ti.UI.createButton({
    title: 'ALERT'
});
button_alert.addEventListener('click', function(){

    // create a Crouton and keep a reference
    var crouton = Crouton.makeText("This is a Crouton with built-in ALERT style", Crouton.STYLE_ALERT);

    // show it
    crouton.show();

    // hide it after 1 sec
    setTimeout(function(){
        crouton.hide();
    }, 1000);
});
win.add(button_alert);

var button_confirm = Ti.UI.createButton({
    title: 'CONFIRM'
});
button_confirm.addEventListener('click', function(){

    // create a Crouton and keep a reference
    var confirm = Crouton.make({
        text: "This is a Crouton with built-in CONFIRM style",
        style: Crouton.STYLE_CONFIRM,
        duration: 5000 // 5 sec.
    });

    // show it when you're ready
    confirm.show();
});
win.add(button_confirm);

var button_activity = Ti.UI.createButton({
    title: 'NEW WINDOW'
});
button_activity.addEventListener('click', function(){

    var otherWindow = Ti.UI.createWindow({
        backgroundColor: '#ddd',
        title: 'New Window'
    });

    otherWindow.addEventListener('open', function(){
        // when the other window is open, show the crouton there
        var confirm = Crouton.make({
            activity: otherWindow.getActivity(), // bind crouton to the other window
            text: "This should show up on the new window",
            style: Crouton.STYLE_CONFIRM
        });
        confirm.show();
    });

    otherWindow.open();

});
win.add(button_activity);

win.open();
