import React, {useEffect, useState} from 'react';
import axios from "axios";
import Rodal from "rodal";
import "rodal/lib/rodal.css"
import {useForm} from "react-hook-form";


// USER
// firstname, lastname, age


function Home() {
    const [users, setUsers] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [edit, setEdit] = useState("")
    const testUsers = [
        {id:1, firstName: "Abdurahmon", lastName: "Nosirov", age: 15},
        {id:2, firstName: "Anvar", lastName: "Navro'zov", age: 15},
        {id:3, firstName: "Amir", lastName: "Qambarov", age: 15}
    ]

    const {handleSubmit, reset, register} = useForm()


    function getUsers() {
        axios({
            url: "localhost/users",
            method: "GET"
        }).then(res => {
            setUsers(res.data)
        })
    }

    useEffect(()=>{
        getUsers();
    },[])


    function saveUser(e) {
        if (!edit){
            axios({
                url: ".../users",
                method: "POST",
                data: {
                    firstName: e.firstName,
                    lastName: e.lastName,
                    age: e.age,
                }
            }).then(()=>{
                getUsers()
            })
        } else {
            axios({
                url: ".../users/"+edit,
                method: "PUT",
                data: {
                    firstName: e.firstName,
                    lastName: e.lastName,
                    age: e.age,
                }
            }).then(()=>{
                getUsers()
            })
        }
    }

    function editUser(id) {
        setIsOpen(true)
        const user = users.find(user=>user.id===id)
        reset({
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
        })
        setEdit(id)
    }

    function deleteUser(id) {
        axios({
            url: ".../users/"+id,
            method: "DELETE"
        }).then(()=>{
            getUsers()
        })
    }

    return (
        <div>
            <Rodal visible={isOpen} onClose={()=>setIsOpen(false)}>
                <form onSubmit={handleSubmit(saveUser)}>
                    <input {...register("firstName")} className={"form-control my-2 mt-3"} type="text" placeholder={"first name"} />
                    <input {...register("lastName")} className={"form-control my-2"} type="text" placeholder={"last name"} />
                    <input  {...register("age")} className={"form-control my-2"} type="number" placeholder={"age"} />
                    <button className={"btn btn-success form-control mt-3"}>save</button>
                </form>
            </Rodal>


            <button onClick={()=>setIsOpen(true)} className={"btn btn-success px-5 m-3 mx-5"}>+</button>
            <table className={"table container mt-4"}>
                <thead>
                <tr>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>age</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    testUsers.map(user=>(
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.age}</td>
                            <td><div className={"btn-group"}>
                                <button onClick={()=>editUser(user.id)} className={"btn btn-warning"}>edit</button>
                                <button onClick={()=>deleteUser(user.id)} className={"btn btn-danger"}>delete</button>
                            </div></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default Home;