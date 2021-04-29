/* Components */
import { Nav, Hero, Tip } from '../components';

export const HomePage = () => {
    return (
        <section className='layout'>
            <Nav />
            <Hero />
            <section className="tip-list">
                <Tip/>
            </section>
        </section>
    );
};

HomePage.displayName = 'MyHomePage';