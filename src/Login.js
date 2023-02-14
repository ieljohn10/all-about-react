import { useEffect } from "react";

const Login = () => {
   
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data);
        });
    }, []);
    return(
        <div className="Login">
            <h1>Log In</h1>
            
        </div>
    )
}

export default Login;