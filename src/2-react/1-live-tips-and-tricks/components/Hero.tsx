/* Icons */
import { icons } from '../theme/icons/tag';
import { NodeJS } from '../theme/icons/tag/NodeJS';
import { NextJS } from '../theme/icons/tag/NextJS';

export const Hero = () => {
    return (
        <section className='hero'>
            <div className='title'>
                <h1>Типсы и Триксы</h1>
                <h2>Все темы</h2>
            </div>

            <div className='tags'>
                <span>
                    <icons.React /> React
                </span>
                <span>
                    <NodeJS/> Node.js
                </span>
                <span>
                    <icons.JavaScript/> JavaScript
                </span>
                <span>
                    <icons.TypeScript/> TypeScript
                </span>
                <span>
                    <NextJS/> Next.js
                </span>
                <span>
                    <icons.VSCode/>VSCode
                </span>
                <span>
                    <icons.CSS/>CSS
                </span>
                <span>
                    <icons.Git/>Git
                </span>
                <span>
                    <icons.GraphQL/>GraphQL
                </span>
            </div>
        </section>
    )
};