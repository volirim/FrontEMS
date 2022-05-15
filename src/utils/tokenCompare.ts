interface ItokenCompare {
    Authorization: string | null;
} 

const tokenCompare = (): ItokenCompare => {
    const token = localStorage.getItem('token')
    return {
        Authorization: token
    }
}

export default tokenCompare;