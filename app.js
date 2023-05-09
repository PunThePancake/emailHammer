var body = document.getElementById('body')

function refresh() {
    location.reload();
}

function selectionToggle() {
    var mainOver = document.getElementById('navOverlay');
    var main = document.getElementById('main');
    
    if (mainOver.style.opacity === '0') {
        mainOver.style.zIndex = '9999'
        setTimeout(() => {
            mainOver.style.opacity = '1'
            main.style.transform = 'translateY(0rem)'
            main.style.pointerEvents = 'all'
        }, "1");
    }
    else {

        mainOver.style.opacity = '0'
        main.style.transform = 'translateY(3rem)'
        main.style.pointerEvents = 'none'

        setTimeout(() => {
            mainOver.style.zIndex = '-1'
        }, "300");
    }
}

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
document.title = 'session: ' + time

function infoTooltipShow() {
    var tooltip = document.getElementById('infotooltip')

    tooltip.style.opacity = '1'
    tooltip.style.transform = 'translateY(0rem)'
}

function infoTooltipHide() {
    var tooltip = document.getElementById('infotooltip')

    tooltip.style.opacity = '0'
    tooltip.style.transform = 'translateY(1rem)'
}

function panelTooltipShow() {
    var tooltip = document.getElementById('paneltooltip')

    tooltip.style.opacity = '1'
    tooltip.style.transform = 'translateY(0rem)'
}

function panelTooltipHide() {
    var tooltip = document.getElementById('paneltooltip')

    tooltip.style.opacity = '0'
    tooltip.style.transform = 'translateY(1rem)'
}

function loggedTooltipShow() {
    var tooltip = document.getElementById('loggedtooltip')

    tooltip.style.opacity = '1'
    tooltip.style.transform = 'translateY(0rem)'
}

function loggedTooltipHide() {
    var tooltip = document.getElementById('loggedtooltip')

    tooltip.style.opacity = '0'
    tooltip.style.transform = 'translateY(1rem)'
}

function cookieTooltipShow() {
    var tooltip = document.getElementById('cookietooltip')

    tooltip.style.opacity = '1'
    tooltip.style.transform = 'translateY(0rem)'
}

function cookieTooltipHide() {
    var tooltip = document.getElementById('cookietooltip')

    tooltip.style.opacity = '0'
    tooltip.style.transform = 'translateY(1rem)'
}

window.addEventListener('load', function() {
    var loader = document.getElementById('preloader')
    var wait = document.getElementById('wait')

    wait.textContent = "loaded."
    loader.style.opacity = '0'
    loader.style.transform = 'translateY(100svh)'

    setTimeout(() => {
        loader.style.display = 'none'
    }, "1000");
})

function textRemove() {
    var target = document.getElementById('target')
    if (target.value === 'email@example.com') {
        document.getElementById('target').value = ''
    }
}

function textDetect() {
    var target = document.getElementById('target')
    if (target.value === '') {
        document.getElementById('target').value = 'email@example.com'
    }
}

function textRemoveConfig() {
    var target = document.getElementById('targetConfig')
    if (target.value === 'email@example.com') {
        target.value = ''
    }
}

function textDetectConfig() {
    var target = document.getElementById('targetConfig')
    if (target.value === '') {
        target.value = 'email@example.com'
    }
}

function amountRemoveConfig() {
    var amount = document.getElementById('amountConfig')
    if (amount.value === '10') {
        amount.value = ''
    }
}

function amountDetectConfig() {
    var amount = document.getElementById('amountConfig')
    if (amount.value === '') {
        amount.value = '10'
    }
}

function amountRemove() {
    var amount = document.getElementById('amount')
    if (amount.value === '10') {
        amount.value = ''
    }
}

function amountDetect() {
    var amount = document.getElementById('amount')
    if (amount.value === '') {
        amount.value = '10'
    }
}

function delayRemove() {
    var delay = document.getElementById('delay')
    if (delay.value === '500') {
        delay.value = ''
    }
}

function delayDetect() {
    var delay = document.getElementById('delay')
    if (delay.value === '') {
        delay.value = '500'
    }
}

function delayRemoveConfig() {
    var delay = document.getElementById('delayConfig')
    if (delay.value === '500') {
        delay.value = ''
    }
}

function delayDetectConfig() {
    var delay = document.getElementById('delayConfig')
    if (delay.value === '') {
        delay.value = '500'
    }
}

function senderRemoveConfig() {
    var delay = document.getElementById('senderConfig')
    if (delay.value === 'your@email.here') {
        delay.value = ''
    }
}

function senderDetectConfig() {
    var delay = document.getElementById('senderConfig')
    if (delay.value === '') {
        delay.value = 'your@email.here'
    }
}

function passRemoveConfig() {
    var delay = document.getElementById('passConfig')
    if (delay.value === 'sender password') {
        delay.value = ''
    }
}

function passDetectConfig() {
    var delay = document.getElementById('passConfig')
    if (delay.value === '') {
        delay.value = 'sender password'
    }
}

var current = document.getElementById('currentOverlay')

var dashboard = document.getElementById('dashboardOverlay')
var config = document.getElementById('configOverlay')
var logs = document.getElementById('logsOverlay')

function dashboardOverlay() {
    dashboard.style.display = 'flex'
    setTimeout(() => {
        dashboard.style.opacity = '1'
        dashboard.style.transform = 'translateY(0rem)'
        config.style.opacity = '0'
        config.style.transform = 'translateY(3rem)'
        logs.style.opacity = '0'
        logs.style.transform = 'translateY(3rem)' 
        body.style.overflowY = 'hidden'
        document.getElementById('infoTooltip').textContent = 'Setting correct information in the config panel is recomended before usage of this tool. click on "Dashboard" at the top left to bring up the panel selector overlay.'
    }, "1");

    current.textContent = 'Dashboard'

    setTimeout(() => {
        config.style.display = 'none'
        logs.style.display = 'none'
    }, "300");
}

function configOverlay() {
    config.style.display = 'flex'
    setTimeout(() => {
        dashboard.style.opacity = '0'
        dashboard.style.transform = 'translateY(3rem)'
        config.style.opacity = '1'
        config.style.transform = 'translateY(0rem)'
        logs.style.opacity = '0'
        logs.style.transform = 'translateY(3rem)'
        body.style.overflowY = 'auto'
        document.getElementById('infoTooltip').textContent = 'Before finishing make sure to press apply to set the configuration properly, after pressing apply the page will refresh and bring you back to the dashboard panel.'
    }, "1");
   
    current.textContent = 'Config'

    setTimeout(() => {
        dashboard.style.display = 'none'
        logs.style.display = 'none'
    }, "300");
}

function logsOverlay() {
    logs.style.display = 'flex'
    setTimeout(() => {
        dashboard.style.opacity = '0'
        dashboard.style.transform = 'translateY(3rem)'
        config.style.opacity = '0'
        config.style.transform = 'translateY(3rem)'
        logs.style.opacity = '1'
        logs.style.transform = 'translateY(0rem)'
        body.style.overflowY = 'hidden'
        document.getElementById('infoTooltip').textContent = 'Find all attack history and details here, you can delete specific logs by pressing on the manage button then pressing the minus button next to the specified details.'
    }, "1");
   
    current.textContent = 'Logs'

    setTimeout(() => {
        dashboard.style.display = 'none'
        config.style.display = 'none'
    }, "300");
}

function bypassToggle() {
    var text = document.getElementById('bypassText')
    var light = document.getElementById('bypassLight')

    if (text.textContent === 'off') {
        text.textContent = 'on'
        light.style.backgroundColor = 'var(--primary)'
        document.cookie = 'bypassToggle=true'
    }

    else {
        text.textContent = 'off'
        light.style.backgroundColor = 'var(--secondary)'
        document.cookie = 'bypassToggle=false'
    }
}

function alertToggle() {
    var text = document.getElementById('alertText')
    var light = document.getElementById('alertLight')

    if (text.textContent === 'off') {
        text.textContent = 'on'
        light.style.backgroundColor = 'var(--primary)'
        document.cookie = 'popupToggle=true'
    }

    else {
        text.textContent = 'off'
        light.style.backgroundColor = 'var(--secondary)'
        document.cookie = 'popupToggle=false'
    }
}

function animToggle() {
    var text = document.getElementById('animText')
    var light = document.getElementById('animLight')

    if (text.textContent === 'off') {
        text.textContent = 'on'
        light.style.backgroundColor = 'var(--primary)'
        document.cookie = 'animsToggle=true'
    }

    else {
        text.textContent = 'off'
        light.style.backgroundColor = 'var(--secondary)'
        document.cookie = 'animsToggle=false'
    }
}

function logoutToggle() {
    var text = document.getElementById('logoutText')
    var light = document.getElementById('logoutLight')

    if (text.textContent === 'off') {
        text.textContent = 'on'
        light.style.backgroundColor = 'var(--primary)'
        document.cookie = 'logoutToggle=true'
    }

    else {
        text.textContent = 'off'
        light.style.backgroundColor = 'var(--secondary)'
        document.cookie = 'logoutToggle=false'
    }
}

var cookies = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

function cookieSetter() {
    var root = document.querySelector(':root')
    var inputPrimary = document.getElementById('colorConfigPrimary')
    var inputSecondary = document.getElementById('colorConfigSecondary')

    if (cookies.primaryColor == null) {
        root.style.setProperty('--primary', '#a7ff84')
        document.cookie = 'primaryColor =' + inputPrimary.value
        location.reload()
    }

    else {
        root.style.setProperty('--primary', cookies.primaryColor)
        inputPrimary.value = cookies.primaryColor
    }

    if (cookies.secondaryColor == null) {
        root.style.setProperty('--secondary', '#ff8484')
        document.cookie = 'secondaryColor =' + inputSecondary.value
        location.reload()
    }

    else {
        root.style.setProperty('--secondary', cookies.secondaryColor)
        inputSecondary.value = cookies.secondaryColor
    }

}

function colorSetPrimary() {
    var root = document.querySelector(':root')
    var input = document.getElementById('colorConfigPrimary')
    customColorInput = input.value
    root.style.setProperty('--primary', customColorInput)
    document.cookie = 'primaryColor =' + customColorInput
    input.style.color = (customColorInput)
}

function colorSetSecondary() {
    var root = document.querySelector(':root')
    var input = document.getElementById('colorConfigSecondary')
    customColorInput = input.value
    root.style.setProperty('--secondary', customColorInput)
    document.cookie = 'secondaryColor =' + customColorInput
    input.style.color = (customColorInput)
}

function cookieToggle() {
    var mainOver = document.getElementById('cookieOverlay');
    var main = document.getElementById('cookieMain');
    
    if (mainOver.style.opacity === '0') {
        mainOver.style.zIndex = '9999'
        setTimeout(() => {
            mainOver.style.opacity = '1'
            main.style.transform = 'translateY(0rem)'
            main.style.pointerEvents = 'all'
        }, "1");
    }
    else {

        mainOver.style.opacity = '0'
        main.style.transform = 'translateY(3rem)'
        main.style.pointerEvents = 'none'

        setTimeout(() => {
            mainOver.style.zIndex = '-1'
        }, "300");
    }
}

function deleteAllCookies() {
    var c = document.cookie.split("; ");
    for (i in c) 
    document.cookie =/^[^=]+/.exec(c[i])[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";  
    location.reload();
}