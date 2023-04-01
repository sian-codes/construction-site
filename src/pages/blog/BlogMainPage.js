import "./blog.css";
import PageHeader from "../../components/header/PageHeader";
import SubPosts from "../../components/blog-posts/SubPosts";
import MainPost from "../../components/blog-posts/MainPost";

export default function BlogMainPage() {
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
