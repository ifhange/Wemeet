import React from 'react';
import HistoryStore from '../stores/HistoryStore';
import HistoryActions from '../actions/HistoryActions';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = HistoryStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        HistoryStore.listen(this.onChange);
        HistoryActions.getHistory();
    }

    componentWillUnmount() {
        HistoryStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className="box-b">
            <div id='in'>
                <div id="meet_list">
                    <table id="list">
                        <tbody>
                            <tr><td>會議名稱：</td><td>WeMeet</td></tr>
                            <tr><td>會議長度：</td><td>3小時20分鐘</td></tr>
                            <tr><td>會議成員：</td><td>佳怡、威君、成財、騰輝</td></tr>
                            <tr><td>會議紀錄：</td><td>點我下載</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        );
    }
}

export default History;
