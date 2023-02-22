import {useQuery} from '@tanstack/react-query';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const URL = 'https://rickandmortyapi.com/api/character';

export const Character = (): any => {
    const {id}: any = useParams(); // use params
    const {isLoading, error, data, isFetching} = useQuery({
        queryKey: ['DATA'],
        queryFn: () => fetch(`${URL}/${id}`).then((res) => res.json()),
    });

    if (isLoading) return <h1>Loading...</h1>;

    if (error instanceof Error)
        return 'An error has occurred: ' + error.message;

    return (
        <>
            <div className='card-box'>
                <h1>{data.name}</h1>
                <img src={data.image} alt={data.name} />
                <div>Species: {data.species}</div>
                <div>Gender: {data.gender}</div>
                <div>Status: {data.status}</div>
                <div>Origin: {data.origin.name}</div>
                <div>Current location: {data.location.name}</div>
            </div>
            <div>
                <Link to={`/character`}>
                    <h2>BACK TO CHARACTERS</h2>
                </Link>
            </div>
            <div>
                {isFetching ? (
                    <h1 style={{color: 'red'}}>'Fetching...'</h1>
                ) : (
                    ''
                )}
            </div>
        </>
    );
};
