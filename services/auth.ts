interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'aijeaejoi3johauinclkasjdeaudhih2h1j231hk',
                user: {
                    name: "tiago",
                    email: "tiga@email.com"
                }
            })
        }, 2000)
    })
}