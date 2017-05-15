import alt from '../alt';

class HistoryActions {
    constructor() {
        this.generateActions(
            'getHistorySuccess',
            'getHistoryFail',
            'saveUserList'
        );
    }
    getHistory() {
        var xhr = new XMLHttpRequest();
        var url = "https://140.123.175.95:8787/api/history";
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.responseText == 'success') {
                    this.actions.getHistorySuccess(xhr.response);
                } else {
                    this.actions.getHistoryFail(xhr.response);
                }
            } else {
                this.actions.getHistoryFail(xhr.statusText);
            }
        }
        xhr.send(data);
    }
}

export default alt.createActions(HistoryActions);
