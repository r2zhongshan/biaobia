new Vue({
    el: '#app',
    data: {
        musicPlaying: false,
        message: '',
        messages: [],
        photos: [
            'photo1.png',
            'photo2.png',
            'photo3.png'
        ]
    },
    methods: {
        toggleMusic() {
            this.musicPlaying = !this.musicPlaying;
        },
        addMessage() {
            if (this.message.trim()) {
                this.messages.push(this.message.trim());
                this.message = '';
            } else {
                alert('请填写留言');
            }
        }
    }
});
