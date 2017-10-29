# jquery.messageflow
A jQuery plugin to show feedback messages (error, warning, info) with transparency and autofading features

usage:
  mf = new MessageFlow();
  mf.createContainer();
     creates a new container, by default bottom right (can be edited in .css)
  mf.addMessage('error', 'still some stuff to do');
  mf.addMessage('success', 'Hello World!');
     type can be 'error', 'warning', 'success', 'info' displayed in red, orange, green and blue resp.  
