const ChartOption = (setOption)=>{
    let time
    return {
        Enter: () => {
            window.clearInterval(time)
        },
        Leave: () => {
            time = setInterval(() => {
                setOption()
            }, 1000)
        }
    }
}

export {ChartOption}
