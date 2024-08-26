import { convertToTitleCase, Gist } from "@/utils";

interface CardComponentProps {
    gist: Gist
}

const Card : React.FC<CardComponentProps> = ({ gist }) => {
    const { summary, categories, themes } = gist;
    return (
        <section>
            <div className="relative w-[350px] max-w-full bg-white overflow-hidden shadow-xl">
                <header className="card-header text-2xl font-semibold">
                    <p className="my-2">
                        <span
                            className="mr-2 text-base text-orange-500 font-bold px-2 p-1 rounded-md bg-orange-100 tracking-wider"
                        >{gist.type.toUpperCase()}</span>
                    </p>
                    {gist.title}
                </header>
                <section className="p-4">
                    <p className="font-bold">tl;dr</p>
                    <p className="text-lg">{summary}</p>
                    <div className="my-2">
                        <p className="font-bold">Categories</p>
                        <div className="my-2">
                            {
                                categories.map(
                                    (category) => <span key={`category-${category.id}`} className="mr-2 text-amber-500 font-bold px-2 p-1 rounded-md bg-amber-100"
                                    >{convertToTitleCase(category.name)}</span>
                                )
                            }
                        </div>
                    </div>
                    <div className="my-2">
                        <p className="font-bold">Themes</p>
                        <p className="my-2">
                            {
                                themes.map(
                                    (theme) => <span key={`theme-${theme.id}`} className="mr-2 text-rose-500 font-bold px-2 p-1 rounded-md bg-rose-100"
                                    >{convertToTitleCase(theme.name)}</span>
                                )
                            }
                        </p>
                    </div>
                </section>
                <footer className="card-footer mb-4">
                    <a
                        className="border bg-orange-500 mr-2 p-2 px-4 rounded-md no-underline hover:no-underline font-bold text-white"
                        href={gist.url}>Full thread</a>
                    <a
                        className="border p-2 px-4 border-orange-500 no-underline hover:no-underline rounded-md"
                        href={gist.storyURL}>Story URL</a>
                </footer>
            </div>
        </section>
    )
};

export default Card;