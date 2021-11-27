module.exports = {
    app: {
        px: 'XXX',
        token: 'OTE0MDM4MTc1NTE1NjcyNTc3.YaHOYw.2jw8vfA-JvgKoYNUrxa6HVK9sYA',
        playing: 'Je Joue De La Musique'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
