
export function useAccountManager() {

    const setJwtCredential = (accessToken, refreshToken) => {
        localStorage.setItem("accessToken", accessToken)
        localStorage.setItem("refreshToken", refreshToken)
    }
    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.reload();
    }


    return {
        setJwtCredential,
        logout
    }
}
