import React from 'react';

class LoadEmails extends React.Component{
    constructor(props)
    {
        //passes all the properties down from the App.js file
        super(props)
        this.state = {
            emails : [],
            curEmail : [],
            viewAll : true,
        };
    }
    async componentDidMount() {
        const response = await fetch('http://localhost:3001/emails/')
        const json = await response.json()
        this.setState({emails: json});
    }
    viewMessage(id){
        console.log(this.state.emails[id])
        this.setState({curEmail : this.state.emails[id], viewAll : false })
    }
    back(){
        this.setState({viewAll : true})
    }
    render(){
        if (!this.state.emails){
            return null
        }
        if(this.state.viewAll === true){
            return <table id = "all">
            <tr><td>Subject</td><td>Messages</td></tr>
            {this.state.emails.map(cur => <tr><td>{cur.subject}</td><td>{cur.message}</td><td><button onClick = {() => this.viewMessage(cur.id)}>View</button></td></tr>)}
        </table>
        }
        if(this.state.viewAll === false){
            if (!this.state.curEmail){
                return null
            }
            console.log(this.state.curEmail)
            return <table>
                <tr><td>Sender: {this.state.curEmail.sender}</td><td>Recipient: {this.state.curEmail.recipient}</td></tr>
                <tr><td>Subject: {this.state.curEmail.subject}</td><td>Message: {this.state.curEmail.message}</td></tr>
                <tr><td><button onClick = {() => this.back()}>Back</button></td></tr>
            </table>
        }
    }
}

export default LoadEmails;
