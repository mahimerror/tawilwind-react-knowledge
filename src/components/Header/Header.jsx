import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <div className='container mx-auto my-10 space-y-5'>
            <div className="flex items-center justify-between">
                <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
            <hr />
        </div>
    );
};

export default Header;