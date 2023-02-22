import {Link} from 'react-router-dom';
const About = () => {
    return (
        <>
            <div className='about-container'></div>
            <h1>About homework</h1>
            <h2>15MD: React Router & React Query</h2>
            <p style={{fontSize: '1.2rem'}}>
                <b>Uzdevums</b>
            </p>
            <ul>
                <li>/ - rādīt sākumlapu</li>
                <li>
                    /characters - rādīt datus no results masīva{' '}
                    <Link
                        to={{
                            pathname:
                                'https://rickandmortyapi.com/api/character',
                        }}
                        target='_blank'
                    >
                        https://rickandmortyapi.com/api/character
                    </Link>
                </li>
                <li>/characters/id - rādīt datus par 1 character</li>
                <li>/about - rādīt kaut ko</li>
                <li>
                    Varam izmantot jau iepriekš veidotās kartiņas. Kādus datus
                    rādīt, paši izdomājam.
                </li>
                <li>Visus GET pieprasījumus jātaisa ar Tanstack Query.</li>
                <li>
                    Ja nav, ko darīt, tad to pašu ar epizodēm{' '}
                    <Link
                        to={{
                            pathname: 'https://rickandmortyapi.com/api/episode',
                        }}
                        target='_blank'
                    >
                        https://rickandmortyapi.com/api/episode
                    </Link>
                </li>
            </ul>
            <p style={{fontSize: '1.2rem'}}>
                <b>Noderīgi</b>
            </p>
            <ul>
                <li>
                    Tanstack (React) Query -{' '}
                    <Link
                        to={{
                            pathname:
                                'https://tanstack.com/query/latest/docs/react/installation',
                        }}
                        target='_blank'
                    >
                        https://tanstack.com/query/latest/docs/react/installation
                    </Link>
                </li>
                <li>
                    React Router -{' '}
                    <Link
                        to={{
                            pathname:
                                'https://reactrouter.com/en/main/start/tutorial',
                        }}
                        target='_blank'
                    >
                        https://reactrouter.com/en/main/start/tutorial
                    </Link>
                </li>
                <li>
                    <Link
                        to={{pathname: 'https://youtu.be/r8Dg0KVnfMA'}}
                        target='_blank'
                    >
                        YouTube React Query guide
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default About;
