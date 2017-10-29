# jquery.messageflow
A jQuery plugin to show feedback messages (error, warning, info) with transparency and autofading features

##usage:

`mf = new MessageFlow();`  
`mf.createContainer();`

creates a new container, by default bottom right (can be edited in jquery.messageflow.css)

**.MessageFlow(*type*, *text*, *\*msg_id*)**  
*type* string out of four choices: 'error', 'warning', 'success', 'info'. Will display messages in red, orange, green and blue resp.  
*text* string, message in itself!
msg_id string, message's <div\> id if needed to modify CSS attributes

ex:  
`mf.addMessage('error', 'still some stuff to do');`
`mf.addMessage('success', 'Hello World!');`  
will show 2 messages in the containers, autofading after 10 seconds.  
