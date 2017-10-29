# jquery.messageflow
A jQuery plugin to show feedback messages (error, warning, info) with transparency and autofading features

## usage:

**.createContainer(*id*, *fadeoutDelay*)**  
*id* string, default "messageflow_container0"  
*fadeoutDelay* int, default 10000 (=10 seconds)  
Creates a new container, by default bottom right (can be edited in jquery.messageflow.css)

**.MessageFlow(*type*, *text*, *\*msg_id*)**  
*type* string out of four choices: 'error', 'warning', 'success', 'info'. Will display messages in red, orange, green and blue resp.  
*text* string, message in itself!
msg_id string, message's <div\> id if needed to modify CSS attributes  
Shows a new message in specific container

ex:  
`mf = new MessageFlow();`  
`mf.createContainer();`  
`mf.addMessage('error', 'still some stuff to do');`  
`mf.addMessage('success', 'Hello World!');`  
will show one error message followed by a success message, autofading after 10 seconds.  
