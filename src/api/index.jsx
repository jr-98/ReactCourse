
export const getApiCustomers = (url) => () => fetch(url).then(res => res.json());

export const apiPut = (url, id, obj) => () =>
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(res => res.json())
        .then(r => {
            if (r.error) {
                return Promise.reject(r.validation);
            }
            return r
        })

export const apiPost = (url, obj) => () =>
    fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(res => res.json())
        .then(r => {
            if (r.error) {
                return Promise.reject(r.validation);
            }
            return r
        })