import { useEffect, useState } from "react";

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/users/buyers/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsBuyer(data.isBuyer);
                setIsBuyerLoading(false)
            })
    }, [email])
    return [isBuyer, isBuyerLoading]
}

export default useBuyer;