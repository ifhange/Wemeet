import React from 'react';
import MainStore from '../stores/MainStore' ;
import MainActions from '../actions/MainActions';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = MainStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        MainStore.listen(this.onChange);
    }

    componentWillUnmount() {
        MainStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleLogin(e) {
        e.preventDefault();
        //login();
    }

    handleJoin(e) {
        e.preventDefault();
        //join();
        //開始通訊
        



        //開始錄影
        //let recorder = Recorder.createNew(傳入錄影的東西);
        // {
        //     recordedVideo:this.refs.xxx, //播放錄影檔的DOM物件
        //     recordButton:this.refs.xxx,  //開始錄影的按鈕
        //     playButton:this.refs.xxx,  //撥放錄影的按鈕
        //     downloadButton:this.refs.xxx  //下載錄影的按鈕
        // }

        //開始語音辨識
        //let recognizer = Recognizer.createNew(new webkitSpeechRecognition(),傳入需求如下:
        /*  在物件裡面加入ref屬性，就可以用:this.refs."ref的value"取的這個DOM物件
            {
                select_language:this.refs.xxx   //選擇語言的下拉式選單的DOM物件
                select_dialect:this.refs.xxx   //選擇方言的下拉式選單的DOM物件
                start_button:this.refs.xxx   //開始辨識的按鈕的DOM物件
                final_span:this.refs.xxx   //要取得文字資料的物件
                interim_span:this.refs.xxx  //要取得暫時文字資料的物件
            }
        */
        //);
    }

    render() {
        return (
            <div id="box-b">
                <div id="in">
                    <div id="add_meet">
                        <img src='/img/addmeet1.png'></img>
                        <div id="add">建立會議？</div>
                        <div id="add_text">將朋友寫入在以下欄位，即可立即開始會議</div>
                        <span className="input input--minoru">
                            <input className="input__field input__field--yoko" type="text" id="input-16" />
                            <label className="input__label input__label--yoko" htmlFor="input-16">
                                <span className="input__label-content input__label-content--yoko">輸入朋友名稱</span>
                            </label>
                        </span>
                        <input type="submit" className="myButton" name="login" id="login" value="GO!" onClick={this.handleLogin} ref='login'/>
                    </div>

                    <div id="join_meet">
                        <img src='/img/joinmeet1.png'></img>
                        <div id="add">加入會議？</div>
                        <div id="add_text">將朋友給您的代碼貼上再以下欄位</div>
                        <span className="input input--minoru">
                            <input className="input__field input__field--yoko" type="text" id="input-16" />
                            <label className="input__label input__label--yoko" htmlFor="input-16">
                                <span className="input__label-content input__label-content--yoko">會議代碼</span>
                            </label>
                        </span>
                        <input type="submit" className="myButton" name="login" id="login" value="GO!" onClick={this.handleJoin} ref='join'/>
                    </div>
                </div>
          </div>
        );
    }
}

export default Main;
