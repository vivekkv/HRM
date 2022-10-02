import { highlightComponents } from './';

export function showValidations(message, validations) {

    let validationMessaages = parseValidations(validations);
    highlightComponents(validations);

    showNotification({
        'message': (message + "<br />" + validationMessaages),
        'layout': 'attached',
        'ttl': 6000
    });
}

export function showWarningMessage(message) {

    let msg = message ? message : "Error while processing the request, Please contact administrator";

    showNotification({
        'message': msg,
        'layout': 'growl',
        'ttl': 6000
    });
}

export function showServerResponseMessage(response) {

    if(response.completed && response.data.success) {

        showNotification({
            'message': response.data.message,
            'layout': 'bar',
            'ttl': 6000
        });
        
    } else if(response.completed && !response.data.success) {

        showWarningMessage(response.data.error);
    } else {
        
        showWarningMessage("Request colund not complete !. Please contact administrator ");
    }
}

function showNotification(notificationObject) {

    var notification = new NotificationFx({
        'message': notificationObject.message,
        'layout': notificationObject.layout,
        'effect': getEffect(notificationObject.layout),
        'type': 'notice', 
        'ttl' : notificationObject.ttl ? notificationObject.ttl : 30000,
        'onClose': function () {
            
        }
    });

    notification.show();
}

function parseValidations(validations) {

    let list = "<ul>"

    for(var i in validations) {

        list += "<li>" + validations[i] + "</li>"

    }

    list += "</ul>"

    return list;
}   

function getEffect(layout) {

    switch (layout) {
        case "bar":
            return "exploader";
         case "attached":
            return "bouncyflip";
         case "growl":
            return "scale";
    }
}