import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';


function Category() {
    let navigate=useNavigate()
    let [user, setuser] = useState({
        category: '',
        description: '',
        categoryId: '',
    });

    let [edit, setedit] = useState(false);
    let [record, setrecord] = useState([]);

    useEffect(() => {
        fetchdata();
    }, []);

    let fetchdata = async () => {
        let res = await axios.get("http://catodotest.elevadosoftwares.com/Category/GetAllCategories");
        setrecord(res.data.categoryList);
    };

    let handleInput = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        if (edit) {
            handleUpdate();
        } else {
            handleSave();
        }
        // Reset after submission
        setedit(false);
        setuser({ category: '', description: '', categoryId: '' });
    };

    let handleSave = () => {
        let data = {
            category: user.category,
            description: user.description,
        };
        axios.post("http://catodotest.elevadosoftwares.com/Category/InsertCategory", data).then((res) => {
            console.log(res.data);
            alert("Data saved");
            fetchdata(); // Refresh the data
        });
    };

    let handleUpdate = () => {
        let data = {
            categoryId: user.categoryId,
            category: user.category,
            description: user.description,
        };
        axios.post("http://catodotest.elevadosoftwares.com/Category/InsertCategory", data).then((res) => {
            console.log(res.data);
            alert("Data updated");
            fetchdata();
        });
    };

    let handleDelete = (categoryId) => {
        axios.post(`http://catodotest.elevadosoftwares.com/Category/RemoveCategory`, { categoryId }).then((res) => {
            console.log(res.data);
            alert("Data deleted");
            fetchdata();
        });
    };

    let columns = [
        { name: "Categoryid", selector: (row) => row.categoryId },
        { name: "Category", selector: (row) => row.category },
        { name: "Description", selector: (row) => row.description },
        {
            name: "Action",
            cell: (row) => (
                <div>
                    <button onClick={() => handleedit(row.categoryId)}>Edit</button>
                    <button onClick={() => handleDelete(row.categoryId)}>Delete</button>
                </div>
            ),
        },
    ];

    let handleedit = (categoryId) => {
        let editdata = record.find((item) => item.categoryId === categoryId);
        setuser({
            category: editdata.category,
            description: editdata.description,
            categoryId: editdata.categoryId,
        });
        setedit(true);
    };

    return (
        <div>
            <nav>
            <p className='a'  onClick={(e)=>{e.preventDefault();navigate('/Client');}}>Client</p>
            <p className='a'  onClick={(e)=>{e.preventDefault();navigate('/Employee');}}>Employee</p>
            </nav>
            <h1>Category</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleInput}
                    name="category"
                    value={user.category}
                    placeholder="category"
                />
                <br />
                <input
                    type="text"
                    onChange={handleInput}
                    name="description"
                    value={user.description}
                    placeholder="description"
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <DataTable data={record} columns={columns} pagination keyField="categoryId" />
        </div>
    );
}

export default Category;
