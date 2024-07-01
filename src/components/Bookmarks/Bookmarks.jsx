import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks, readTime}) => {
    return (
        <div className="md:w-1/3">
            <div className="bg-[#EFEDFD] h-20 flex justify-center items-center rounded-lg mb-8">
                <h2 className="text-2xl font-bold">Spent time on read : {readTime} min</h2>
            </div>
            <div className="bg-[#E7E7E7] rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Bookmarked Blogs : {bookmarks.length}</h2>
                <div className="space-y-3">
                    {
                        bookmarks.map((bookmark,idx)=> <h2 className='text-xl bg-white p-3 rounded-md' key={idx}>{bookmark.title}</h2>)
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readTime: PropTypes.number
}
export default Bookmarks;