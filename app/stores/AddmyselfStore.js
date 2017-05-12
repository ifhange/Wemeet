import alt from '../alt';
import AddmyselfActions from '../actions/AddmyselfActions';

class AddmyselfStore {
  constrcutor(){
    this.bingActions(AddmyselfActions);
    this.myselftext= '';
  }

  Addmyselftext(text){
    this.myselftext = text;
    alert(myselftext);
  }

}

export default alt.createStore(AddmyselfStore);