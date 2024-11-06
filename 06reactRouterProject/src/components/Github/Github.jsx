import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/sury-dev')
    //     .then((res) => res.json())
    //     .then((data) => { setData(data) })
    // }, [])
    return (
        <div>
            Github : {data.followers}
            <img src={data.avatar_url} alt="Avatar" width="300px" />
        </div>
    )
}

export async function githubInfoLoader() {
    const response = await fetch('https://api.github.com/users/sury-dev');
    return response.json();
}

export default Github
