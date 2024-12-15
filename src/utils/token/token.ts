let token :string 

export function getToken() :string{

    return window.localStorage.getItem("token")||""
}

export function setToken(_token :string) :void{
    token=_token
    window.localStorage.setItem("token",_token)
}
