import SoundPlayer from 'react-native-sound-player'

export const soundPlay = () => {
    try {
        SoundPlayer.playSoundFile('i', 'mp3')
    } catch (e) {
        alert('Cannot play the file')
        console.log('cannot play the song file', e)
    }
}
export const stopPlaying = () => {
    try {
        SoundPlayer.stop()
    } catch (e) {
        alert('Cannot play the file')
        console.log('cannot play the song file', e)
    }
}
