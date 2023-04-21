import "./blog.css";
import PageHeader from "../../components/header/PageHeader";
import SubPosts from "../../components/blog-posts/SubPosts";

export default function BlogMainPage() {
    return (
        <div className="blog-page">
            <PageHeader></PageHeader>
            &nbsp;
                <SubPosts></SubPosts>
            <SubPosts></SubPosts>
            <SubPosts></SubPosts>
            <SubPosts></SubPosts>
        </div>
    );
};
