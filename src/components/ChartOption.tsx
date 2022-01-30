const ChartOption = (setOption)=>{
    let time
    return {
        Enter: () => {
            console.log('enter');
            window.clearInterval(time)
        },
        Leave: () => {
            console.log('leave');
            time = setInterval(() => {
                setOption()
            }, 1000)
        }
    }
}

export {ChartOption}
