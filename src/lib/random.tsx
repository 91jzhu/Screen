const random = (value) => {
    let result = value
    if (result > 80) return 'Perfect'
    if (result > 60) return 'Not Bad'
    return 'Oops'
}

export {random}