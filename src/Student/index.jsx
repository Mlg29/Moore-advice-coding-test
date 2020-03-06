import React from "react"
import "./student.css"


class Student extends React.Component {
    state = {
        name: '',
        email: '',
        address: '',
        phone: '',
    }

    handleChange = (e) => {
        const { name, value} = e.target
        this.setState({[name]: value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        
        
    }
    addTask() {
       
        const name = document.querySelector('#name')
        const email = document.querySelector('#email')
        const phone = document.querySelector('#phone')
        const address = document.querySelector('#address')
        const list = document.querySelector('#list')
        const liName = document.createElement('p')
        const liEmail = document.createElement('p')
        const liPhone = document.createElement('p')
        const liAddress = document.createElement('p')
        list.appendChild(liName)
        
        list.appendChild(liEmail)
        list.appendChild(liPhone)
        list.appendChild(liAddress)
        liName.appendChild(document.createTextNode(`Name: ${name.value}`))
        liEmail.appendChild(document.createTextNode(`Email: ${email.value}`))
        liPhone.appendChild(document.createTextNode(`Phone: ${phone.value}`))
        liAddress.appendChild(document.createTextNode(`Address: ${address.value}`))

        localStorage.setItem("Name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        localStorage.setItem("address", address);
    }
    removeTask = () => {
        const list = document.querySelector('#list')
        list.removeChild(list.childNodes[3])
        list.removeChild(list.childNodes[2])
        list.removeChild(list.childNodes[1])
        list.removeChild(list.childNodes[0])
        
       
      };
    render() {
        // const { name, email, phone, address } = this.state

       

        
        return (
            <div className="students">
                <h1>Student Management System</h1>
                <form className="form" id="form" onSubmit={this.handleSubmit}>
                    <div className="form-div">
                        <label>Name:</label>
                        <input id="name" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="form-div">
                        <label>Email:</label>
                        <input id="email" type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="form-div">
                        <label>Phone:</label>
                        <input id="phone" type="num" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                    </div>
                    <div className="form-div">
                        <label>Address:</label>
                        <input id="address" type="text" name="address" value={this.state.address} onChange={this.handleChange}/>
                    </div>
                    <div className="div-button">
                        <input className="button1" type="submit" value="Add Info" onClick={this.addTask}/>
                        <input className="button2" type="submit" value="Delete Info" onClick={this.removeTask}/>
                    </div>

                </form>

                <div className="list" id="list">
                        
                </div>
            </div>
        )
    }
}

export default Student