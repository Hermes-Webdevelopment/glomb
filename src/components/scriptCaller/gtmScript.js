
export function gtmCaller() {
    const w = window
    const d = document
    const s = 'script'
    const l = 'dataLayer'
    const i = 'GTM-MZG2JHG'
    w[l]=w[l]||[]
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'})
        var f=d.getElementsByTagName(s)[0], 
            j=d.createElement(s),
            dl=l!='dataLayer'?'&l='+l:'';
        
        j.async=true
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f)
}
