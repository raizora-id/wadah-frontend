import { NoteContent } from '@/components/notes/note-content';
import { NotesLayout } from '@/components/notes/notes-layout';
import { NotesList } from '@/components/notes/notes-list';
import { Sidebar } from '@/components/notes/sidebar';
import { PageSEO } from '@/components/seo';
import { siteMetadata } from '@/data/site-metadata';

/**
 * The main page component that renders the HomePage component.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */
const Page = () => {
    const content = `
    It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way...

    There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever.

    It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-and-twentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster. Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America...
  `;
    return (
        <>
            <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
            <NotesLayout
                sidebar={<Sidebar />}
                list={<NotesList />}
                content={<NoteContent title='A Tale of Two Cities' author='Charles Dickens' content={content} />}
            />
        </>
    );
};

export default Page;
