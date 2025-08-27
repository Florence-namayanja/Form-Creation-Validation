import {useState} from 'react'
 function Form(){
    const [formData, setFormData]= useState({name:'',
        email:'',
        age:''
    });

    const handleChange = (e) =>{
       setFormData ({...FormData, [e.target.name]: e.target.value});
    };

    const handleSubmit=(e) =>{
        e.preventDefault();
        alert('Form Submitted')
    };
    return(
        <div><h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name"
                               placeholder="name"/> 
        
        
        </form></div>
        
    )

 }