import alt from '../alt';
import MeetingActions from '../actions/MeetingActions';

class MeetingStore {
    constructor() {
        this.bindActions(MeetingActions);
        this.connections = {}; //存放連線中的人的socket.id
        this.remoteVideoTag = {}; //存放連線中的人的videoTag
        this.remoteStreamURL = {}; //存放連線中的人的stream
        this.videoIsReady = false;
        this.audioOn = false;
        this.localStream = '';
        this.localVideoURL = '';
        this.isStreaming = false;
        this.meet_mytext = '';
        this.langs = [
            ['Afrikaans', ['af-ZA']],
            ['Bahasa Indonesia', ['id-ID']],
            ['Bahasa Melayu', ['ms-MY']],
            ['Català', ['ca-ES']],
            ['Čeština', ['cs-CZ']],
            ['Dansk', ['da-DK']],
            ['Deutsch', ['de-DE']],
            ['English', ['en-AU', 'Australia'],
                ['en-CA', 'Canada'],
                ['en-IN', 'India'],
                ['en-NZ', 'New Zealand'],
                ['en-ZA', 'South Africa'],
                ['en-GB', 'United Kingdom'],
                ['en-US', 'United States']
            ],
            ['Español', ['es-AR', 'Argentina'],
                ['es-BO', 'Bolivia'],
                ['es-CL', 'Chile'],
                ['es-CO', 'Colombia'],
                ['es-CR', 'Costa Rica'],
                ['es-EC', 'Ecuador'],
                ['es-SV', 'El Salvador'],
                ['es-ES', 'España'],
                ['es-US', 'Estados Unidos'],
                ['es-GT', 'Guatemala'],
                ['es-HN', 'Honduras'],
                ['es-MX', 'México'],
                ['es-NI', 'Nicaragua'],
                ['es-PA', 'Panamá'],
                ['es-PY', 'Paraguay'],
                ['es-PE', 'Perú'],
                ['es-PR', 'Puerto Rico'],
                ['es-DO', 'República Dominicana'],
                ['es-UY', 'Uruguay'],
                ['es-VE', 'Venezuela']
            ],
            ['Euskara', ['eu-ES']],
            ['Filipino', ['fil-PH']],
            ['Français', ['fr-FR']],
            ['Galego', ['gl-ES']],
            ['Hrvatski', ['hr_HR']],
            ['IsiZulu', ['zu-ZA']],
            ['Íslenska', ['is-IS']],
            ['Italiano', ['it-IT', 'Italia'],
                ['it-CH', 'Svizzera']
            ],
            ['Lietuvių', ['lt-LT']],
            ['Magyar', ['hu-HU']],
            ['Nederlands', ['nl-NL']],
            ['Norsk bokmål', ['nb-NO']],
            ['Polski', ['pl-PL']],
            ['Português', ['pt-BR', 'Brasil'],
                ['pt-PT', 'Portugal']
            ],
            ['Română', ['ro-RO']],
            ['Slovenščina', ['sl-SI']],
            ['Slovenčina', ['sk-SK']],
            ['Suomi', ['fi-FI']],
            ['Svenska', ['sv-SE']],
            ['Tiếng Việt', ['vi-VN']],
            ['Türkçe', ['tr-TR']],
            ['Ελληνικά', ['el-GR']],
            ['български', ['bg-BG']],
            ['Pусский', ['ru-RU']],
            ['Српски', ['sr-RS']],
            ['Українська', ['uk-UA']],
            ['한국어', ['ko-KR']],
            ['中文', ['cmn-Hans-CN', '普通话 (中国大陆)'],
                ['cmn-Hans-HK', '普通话 (香港)'],
                ['cmn-Hant-TW', '中文 (台灣)'],
                ['yue-Hant-HK', '粵語 (香港)']
            ],
            ['日本語', ['ja-JP']],
            ['हिन्दी', ['hi-IN']],
            ['ภาษาไทย', ['th-TH']]
        ];
        this.interim_result = '';
        this.final_result = '';
        this.audioState = '取消辨識';
        this.audioImg = 'audio-on';
        this.videoState = '取消視訊';
        this.videoImg = 'video-off';
        this.inviteState = 'invite_detail_off';
        this.recordState = 'recognition_detail_on';
        this.candidateQueue = {};
    }

    changeAudioState() {
        if (this.audioState == '取消辨識' && this.recordState == 'recognition_detail_on') {
            this.audioState = '開始辨識';
            this.audioImg = 'audio-off';
            this.recordState = 'recognition_detail_off';
        } else {
            this.audioState = '取消辨識';
            this.audioImg = 'audio-on';
            this.recordState = 'recognition_detail_on';
        }
    }

    changeVideoState() {
        if (this.videoState == '取消視訊') {
            this.videoState = '視訊';
            this.videoImg = 'video-on';
        } else {
            this.videoState = '取消視訊';
            this.videoImg = 'video-off';
        }
    }

    changeInviteState() {
        if (this.inviteState == 'invite_detail_off') {
            this.inviteState = 'invite_detail_on';
        } else {
            this.inviteState = 'invite_detail_off';
        }
    }
    changeVideoReadyState() {
        this.isStreaming = !this.isStreaming;
        this.videoIsReady = !this.videoIsReady;
    }
    gotLocalVideo(videoURL) {
        this.localVideoURL = videoURL;
    }

    newParticipant(object) {
        this.connections[object.a] = object.b;
    }

    updateResult({ temp, final }) {
        this.interim_result = temp;
        this.final_result = final;
    }

    addMytext(data) {
        // this.meet_mytext
    }

    addRemoteTag(obj) {
        this.remoteVideoTag[obj.a] = obj.b;
    }

    deleteRemoteTag(id) {
        delete this.remoteVideoTag[id];
        delete this.remoteStreamURL[id];
        delete this.connections[id];
    }

    addRemoteStreamURL(obj) {
        this.remoteVideoTag[obj.a].srcObject = obj.c;
        this.remoteVideoTag[obj.a].setAttribute('src', obj.b);
        this.remoteStreamURL[obj.a] = obj.b;
    }
}

export default alt.createStore(MeetingStore);
