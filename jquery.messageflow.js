function MessageFlow() {
    this.counter = 0;
    this.createContainer = function (id="messageflow_container0", fadeoutDelay=10000) {
        this.id = id;
        this.fadeoutDelay = fadeoutDelay;
        var html_str = '<div id="' + id + '"></div>';
        $('body').append(html_str);
    }
    this.addMessage = function (type, msg, msg_id) {
        if(type) msgClass = 'messageflow_msg_' + type;
        if(typeof(msg_id) == 'undefined') msg_id = 'msg_' + this.counter;
        var html_str = '<div id="' + msg_id + '" class="messageflow_msg ' + msgClass + '">' + msg + '</div>'
        $('#' + this.id).append(html_str);
        $('#' + msg_id).fadeOut(this.fadeoutDelay);
        setTimeout(function() {
            $('#' + msg_id).remove();
        }, this.fadeoutDelay + 1000);
        this.counter += 1;
    }
}

