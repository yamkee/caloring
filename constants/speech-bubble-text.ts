const num = Math.floor(Math.random() * 5)
export default () => {
    switch (num) {
        case 0:
            return '오늘도 힘차게!'
        case 1:
            return '오늘도 쑥쑥쑥!'
        case 2:
            return '성큼성큼 만보까지!'
        case 3:
            return '발걸음은 나의 에너지'
        case 4:
            return '우리 함께 걸어요'
        default:
            return ''
    }
}
