import alt from '../alt';
import HistoryActions from '../actions/HistoryActions';

class HistoryStore {
    constrcutor() {
        this.bindActions(HistoryActions);
        this.historyList = [];
        this.userList = [];
    }
    getHistorySuccess(respond) {
    	console.log(respond)
    	this.historyList.push()
    }

    getHistoryFail(respond) {
    	console.log(respond)
    }

    saveUserList(list){
    	this.userList = list;
    }

}

export default alt.createStore(HistoryStore);
