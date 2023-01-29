import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'My new party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'luigi', id: 3},
    ]);
    

    return (  
        <div className="home">
            {blogs.map( (item) => (
                // we use "item" because "item" have access to each item and then the id property from that blogs
                <div className="blog-preview" key={item.id}>
                    <h2>{ item.title }</h2>
                    <p>Written by: { item.author }</p>
                </div>
            ))}
        </div>  
    );
}
 
export default Home;