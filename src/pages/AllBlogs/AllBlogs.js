import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Home/NavBar/NavBar';
import Blog from '../../components/Home/PopularBlogs/Blog/Blog';
import fakeBlogData from '../../data/fakeBlogData.json';
import BlogSkeleton from '../../Skeleton/BlogSkeleton/BlogSkeleton';
import './AllBlogs.css';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [skeletonTimer, setSkeletonTimer] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSkeletonTimer(false);
        }, 4000);
    }, []);

    useEffect(() => {
        setBlogs(fakeBlogData)
    }, [])
    return (
        <>
            <div className="nav-color">
                <NavBar />
            </div>
            {(skeletonTimer) ?

                <div className="row m-5">
                    {blogs.map((loading) => (
                        <div className="col-md-4 mt-3">
                            <BlogSkeleton />
                        </div>
                    ))}
                </div>
                :
                <div className="d-flex justify-content-center align-items-center flex-wrap pt-5">
                    {blogs?.map((blog) =>
                        <Blog key={blog.id} blog={blog} />
                    )}
                </div>
            }
            <Footer />
        </>
    );
};

export default AllBlogs;