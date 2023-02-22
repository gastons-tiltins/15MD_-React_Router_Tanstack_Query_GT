import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import axios from 'axios';

// https://rickandmortyapi.com/api/character?page=1

export const Characters = () => {
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    // const fetchCharacter = (page: number) =>
    //     fetch('https://rickandmortyapi.com/api/character?page=' + page).then(
    //         (res) => res.json(),
    //     );

    const fetchCharacter = (page: number) =>
        axios
            .get('https://rickandmortyapi.com/api/character?page=' + page)
            .then((res) => res.data);

    const {isLoading, isError, error, data, isFetching, isPreviousData} =
        useQuery({
            queryKey: ['results', page],
            queryFn: () => fetchCharacter(page),
            keepPreviousData: true,
        });

    if (isLoading) return <h1 style={{color: 'red'}}>Loading...</h1>;

    if (error instanceof Error)
        return <h1>{`An error has occurred: ${error.message}`}|</h1>;

    let totalPages = data.info.pages;

    return (
        <>
            <div>
                {isLoading ? (
                    <h1 style={{color: 'red'}}>Loading...</h1>
                ) : isError ? (
                    <div>Error</div>
                ) : (
                    <>
                        {isFetching ? (
                            <h1 style={{color: 'red'}}> Fetching...</h1>
                        ) : null}{' '}
                        <div className='buttons-grid'>
                            <div className='buttons'>
                                <button
                                    onClick={() =>
                                        setPage((page) => Math.max(page - 1, 0))
                                    }
                                    disabled={page === 1}
                                >
                                    Previous Page
                                </button>{' '}
                                <button
                                    onClick={() => {
                                        if (
                                            !isPreviousData &&
                                            data.info.next != null
                                        ) {
                                            setPage((page) => page + 1);
                                        }
                                    }}
                                    disabled={
                                        isPreviousData || data.info.next == null
                                    }
                                >
                                    Next Page
                                </button>
                                <p>
                                    Current Page: {page} of {totalPages}
                                </p>
                            </div>
                        </div>
                        <div className='wrapper'>
                            {data.results.map((data: any) => (
                                <div key={data.id}>
                                    <Link to={`/character/${data.id}`}>
                                        <div className='box'>
                                            <h1>Name: {data.name}</h1>
                                            <img
                                                src={data.image}
                                                alt={data.name}
                                            />
                                            <div>Name: {data.name}</div>
                                            <div>Species: {data.species}</div>
                                            <div>Gender: {data.gender}</div>
                                            <div>Status: {data.status}</div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
