// To enable real time communication call 'io()' which is valiable because socket io js code is already loaded in the previous script


// in the 'io()' call we are initiating the request deom the client tothe server to open on web sockets and kepp the connection open
const socket = io();

// Either client or server can emit notifications or listen to them

// (<--) connect 
// Stablish what happens  (on the client ) when the client connects  to the server
socket.on('connect', function ()  {
    console.log('Client connected');

    // Get the params from the url when the user access the chat route
    const params = jQuery.deparam(window.location.search);
    // Tell the server what room the user is joining 
    socket.emit('join', params, function(err) {
        if(err) {
            alert(err);
            // Return user to the root page
            window.location.href = '/';
        }
        else {
            console.log('Notification sent');
        }
    })
});

// (<--) newChatMessage
socket.on('newChatMessage', function(message) {
    console.log('Server emitted "newChatMessage" event/notification. Message:', message);
    // Create a moment at whitch the message was sent
    const formatedTime = moment(message.createdAt).format('h:mm a');

    const template = jQuery('#message-template').html();
    const html = Mustache.render(template, {
        text: message.text,
        from: message.from,
        createdAt: formatedTime
    });
    jQuery('#messages').append(html);

    // Scroll to button to see the last message
    // TODO : Implement this function
     scrollToButtom();
});

// (<--) updateUserList
// Add the user to the user list.
socket.on('updateUserList', function(users) {
    console.log(users);
    const ol = jQuery('<ol></ol>'); // Create the ordered list
    // Populate the ordered list
    users.forEach(user => {
        // Append the list item (li)
        ol.append(jQuery('<li></li>').text(user));
    });
    // So far we have this:
    jQuery('#users').html(ol);
}); 

// (<--) newLocationMessage
// Stablish what happens when client receives a location message from server
socket.on('newLocationMessage', function(locationMessage) {
    console.log('Server emitted "newLocationMessage" event/notification. Message:', locationMessage);
    const formattedTime = moment(locationMessage.createdAt).format('h:mm, a');
    const template = jQuery('#location-message-template').html();
    const html = Mustache.render(template, {
        from: locationMessage.from,
        createdAt: formattedTime,
        url: locationMessage.url
    });
    jQuery('#messages').append(html);
    scrollToButtom();
});

// Send message
// When the user submits the form (clicking the send button) the callback function will be fired
jQuery('#message-form').on('submit', function (event) {
    // Prevent the default behavior: prevent the page from reloading and change the route
    event.preventDefault();
    const messageTextBox = jQuery('[name=message]');
    const text = messageTextBox.val();
    // (-->) createChatMessage
    socket.emit('createChatMessage', {
        text
    }, function() {
        messageTextBox.val('');
    });
});

// Send location message
// When the user clicks the send location button the callback will be executed

const locationButton = jQuery('#send-location');
locationButton.on('click', function() {
    // Check if the user has access to the location API of the browser
    // The geolocation API exists on the navigation.location object
    if (!navigator.geolocation) {
        return alert('Geolocation not supported by your browser');
    }
    // Disable the location button while then the location is being sent
    // And set the text to sending location
    locationButton.attr('disabled', 'disabled')
        .text('Sending location...');
    // Fetch the user location
    navigator.geolocation.getCurrentPosition(function(position) {
        // Re-enable the location button and text to normal
        locationButton.removeAttr('disabled')
        .text('Send location');
        // (-->) createLocationMessage
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude 
        })
    }, function() { // Error handler function
        // Re-enable the location button and text to normal
        locationButton.removeAttr('disabled')
        .text('Send location');
        // Let the user know that browser is unable to fetch location
        alert('Browser unable to fetch location');
    });
});

// Utility functions
// There are many messages, then we need a function to scroll down to the button of the messages container in  orde to see the new messages
function scrollToButtom () {
    const messages = jQuery('#messages');
    const newMessage = messages.children('li:last-child');
    // Heights
    const clientHeight = messages.prop('clientHeight');
    const scrollTop = messages.prop('scrollTop');
    const scrollHeight = messages.prop('scrollHeight');
    const newMessageHeight = newMessage.innerHeight();
    const lastMessageHeight = newMessage.prev().innerHeight();
    if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
        messages.scrollTop(scrollHeight);
    } 
}
