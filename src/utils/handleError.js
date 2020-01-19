export default error => {
    if (!error.response) {
        if (!navigator.onLine) {
            alert('Try connecting your computer to make a action.')
        } else {
            alert('Try again later.')
        }
    } else if(error.response.status === 500) {
        alert('Error 500')
    } else {
        alert('Try again later.')
    }
}