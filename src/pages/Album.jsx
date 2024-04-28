import { useParams } from "react-router-dom"

export const Album = () => {
    const {albumid} = useParams();
    return <>
    <h1>Album: {albumid}</h1>
    </>
}