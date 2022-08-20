window.sessionStorage.setItem('ZD-launcherLabelRemoved', true)
let originalColor
const htmlStr =  '<img style="width: 100%;height: 100%;" alt="狗急加速客服" src="images/cs_avatar.png"/>'

function setCustomerIcon () {

  let ifs = window.document.getElementsByTagName("iframe")
  if (ifs) {
    try {
      ifs[1].style.width = "100%"
      ifs[1].style.height = "100%"
    }
    catch (_) {
      console.log("zendesk ...")
    }
  }

  if (!window.sessionStorage.getItem('ZD-launcherLabelRemoved')) window.sessionStorage.setItem('ZD-launcherLabelRemoved', true)
  let iframes = window.frames
  if (!iframes) return false
  let iframe = iframes[iframes.length - 1]
  if (!iframe) return false
  let buttons = iframe.document.getElementsByTagName('button');
  if (buttons && buttons.length != 0) {
    iframe.frameElement.style.boxShadow = 'none'
    iframe.frameElement.style.width = '100px'
    iframe.frameElement.style.height = '100px'
    iframe.document.getElementsByTagName('html')[0].style.backgroundColor = 'transparent'
    let iconButton = buttons[buttons.length - 1];
    if (!originalColor){originalColor = window.getComputedStyle ? getComputedStyle(iconButton, null).backgroundColor : iconButton.style.backgroundColor}
    iconButton.parentElement.style.cssText =  'background-color: transparent !important;box-shadow: none;height: 100px;width: 100px;'
    iconButton.style.cssText =  'background-color: transparent !important;box-shadow:none;'
    if (!iconButton.children[0].innerHTML.includes('cs_avatar.png')){
      iconButton.children[0].innerHTML = htmlStr
    }
    if (iconButton.children.length >= 2) {iconButton.children[1].style.cssText = 'height: 60px;width: 60px;margin: 28px 0 0 20px; background-color: ' + originalColor}
    return true
  }
}

let iconInterval = setInterval( ()=> {setCustomerIcon ()}, 10)

