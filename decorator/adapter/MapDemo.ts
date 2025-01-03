const googleMap = {
    show() {
        console.log('googleMap')
    }
}
const baiduMap = {
    show() {
        console.log('baiduMap')
    }
}
const weixinMap = {
    display() {
        console.log('weixinMap')
    }
}

function generalMethod(map: any) {
    if (map instanceof Function) {
        map.show()
    }
}

const weixinMapAdapter = {
    show() {
        weixinMap.display()
    }
}


