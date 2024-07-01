import PropTypes from 'prop-types';
import { GoBookmark } from "react-icons/go";

const Blog = ({blog ,bookmarkHandler,timeHandler}) => {
    const {title, cover_img, reading_time, author_img, author, posted_date ,hashtags}=blog;
    return (
        <div>
            <img src={cover_img} alt="" className=' h-[450px] w-full'/>
            <div className="flex items-center justify-between my-5">
                <div className="flex items-center gap-5">
                    <div className=""><img src={author_img} alt="" className='h-10 w-10 rounded-full'/></div>
                    <div className="">
                        <h4 className=' font-bold text-2xl'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className=""><p>{reading_time} min read</p></div>
                    <div className=""><button onClick={() => bookmarkHandler(blog)}><p><GoBookmark /></p></button></div>
                </div>
            </div>
            <h2 className='text-4xl my-5'>{title}</h2>
            <div className="flex gap-3 my-5">
            {
                hashtags.map((tag , idx) => <p key={idx}> {tag} </p>)
            }
            </div>
            <button onClick={() => timeHandler(reading_time)}><p className='my-5 text-blue-900'><u>Mark as read</u></p></button>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    bookmarkHandler: PropTypes.func.isRequired,
    timeHandler: PropTypes.func.isRequired
}

export default Blog;