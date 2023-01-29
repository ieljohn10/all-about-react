const BlogList = ({  id, blogs, title, handleDelete }) => {
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map( (item) => (
                // we use "item" because "item" have access to each item and then the id property from that blogs
                <div className="blog-preview" key={item.id}>
                    <h2>{ item.title }</h2>
                    <p>Written by: { item.author }</p>
                    <button onClick={() => handleDelete(item.id)}>delete blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;