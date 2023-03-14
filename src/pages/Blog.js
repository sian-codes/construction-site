import "./home.css";
import PageHeader from "../components/PageHeader";
import SubPosts from "../components/blog-posts/SubPosts";
import MainPost from "../components/blog-posts/MainPost";

export default function Blog() {
    return (
        <div className="blog-page">
            <PageHeader></PageHeader>
            <MainPost></MainPost>
            <div className="sub-post-container">
                <SubPosts></SubPosts>
            </div>
        </div>
    );
};
