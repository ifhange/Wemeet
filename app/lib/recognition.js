'use strict';

let Recognition = {
    createNew: (action) => {
        //模組物件
        let recognizer = {};

        //模組接口的需求:Select選單物件、中途判定之文字輸出口、最終結果文字輸出口
        let final_transcript = '';
        recognizer.isRecognizing = false;
        let ignore_onend;
        let start_timestamp;

        let recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognizer.setLanguage = () => {
            recognition.lang = select_dialect.value;
        }

        let two_line = /\n\n/g;
        let one_line = /\n/g;

        let first_char = /\S/;

        let capitalize = (s) => {
            return s.replace(first_char, (m) => {
                return m.toUpperCase();
            });
        };

        recognizer.toggleButtonOnclick = () => {
            if (isRecognizing) {
                recognition.stop();
                return;
            }
            final_transcript = '';
            recognition.start();
            ignore_onend = false;
            start_timestamp = event.timeStamp;
        };

        recognition.onstart = () => {
            isRecognizing = true;
            alert('按下麥克風圖示，並開始說話。');
        };

        recognition.onerror = (event) => {
            if (event.error == 'no-speech') {
                alert('偵測不到麥克風訊號，請調整裝置的設定。');
                ignore_onend = true;
            }
            if (event.error == 'audio-capture') {
                alert('偵測不到麥克風，請正確安裝。');
                ignore_onend = true;
            }
            if (event.error == 'not-allowed') {
                if (event.timeStamp - start_timestamp < 100) {
                    alert('麥克風的權限被阻擋，請至chrome://settings/contentExceptions#media-stream更改設定');
                } else {
                    alert('存取麥克風被拒。');
                }
                ignore_onend = true;
            }
        };

        recognition.onend = () => {
            isRecognizing = false;
            if (ignore_onend) {
                return;
            }
        };

        recognition.onresult = (event) => {
            let interim_transcript = '';
            //版本過舊的情況
            if (typeof(event.results) == 'undefined') {
                recognition.onend = null;
                recognition.stop();
                return;
            }

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final_transcript += event.results[i][0].transcript;
                } else {
                    interim_transcript += event.results[i][0].transcript;
                }
            }
            final_transcript = capitalize(final_transcript);
            action({
                temp: interim_transcript,
                final: final_transcript
            });
        };
        return recognizer;
    }
};

module.exports = Recognition;
