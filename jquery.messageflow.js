function MessageFlow() {
    this.counter = 0;
    this.createContainer = function (id, displayDuration, fadeoutDuration) {
        this.id = (typeof(id) != 'undefined') ? id : "messageflow_container0";
        this.displayDuration = (typeof(displayDuration) != 'undefined') ? displayDuration : 5000;
        this.fadeoutDuration = (typeof(fadeoutDuration) != 'undefined') ? fadeoutDuration : 5000;
        this.removeDelay = this.displayDuration + this.fadeoutDuration + 1000;
        var html_str = '<div id="' + this.id + '"></div>';
        $('body').append(html_str);
    }
    this.addMessage = function (type, msg, msg_id) {
        var that = this;
        if(type) msgClass = 'messageflow_msg_' + type;
        if(typeof(msg_id) == 'undefined') msg_id = 'msg_' + this.counter;
        var html_str = '<div id="' + msg_id + '" class="messageflow_msg ' + msgClass + '">' + msg + '</div>'
        $('#' + this.id).append(html_str);
        setTimeout(function() {
            $('#' + msg_id).fadeOut(that.fadeoutDuration);
        }, this.displayDuration);
        setTimeout(function() {
            $('#' + msg_id).remove();
        }, this.removeDelay);
        this.counter += 1;
    }
}

