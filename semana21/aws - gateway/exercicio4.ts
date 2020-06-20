function handler(event: any) {
    const isEmail = event.email.includes('@')
    let reason
    if (isEmail) {
        reason = 'its missing an @'
    }
    else {
        reason = 'it contains an @'
    }
    return JSON.stringify({
        isEmail,
        reason
    })
}