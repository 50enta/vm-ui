export function GetParams({ setLoad }) {
    let params = 0

    function ReturnParams(obj, method) {
        setLoad(true)
        
        let headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
            "Accept": "application/json",
        }

        if (method != 'GET') {
            params = {
                method: method,
                headers: headers,
                body: JSON.stringify(obj)
            }
        } else {
            params = {
                method: method,
                headers: headers,
            }
        }
        return params
    }
    
    return { ReturnParams }
}