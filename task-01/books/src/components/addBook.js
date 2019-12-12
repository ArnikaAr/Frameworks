import React, {Component} from 'react'

export class AddBook extends Component {
    state = {
        title: ''
    };
    onChange = (e) => this.setState({
        title: e.target.value
    });
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.title.replace(/\s/g,"") !== "") {
            let googleAPI = "https://www.googleapis.com/books/v1/volumes?maxResults=" + 10 + "&q=" + this.state.title;
            fetch(googleAPI)
                .then(response => response.json())
                .then(commits => {
                    this.props.addBook(commits)
                });

            this.setState({title: ' '});
        }
    };

    render() {
        return (
            // eslint-disable-next-line react/react-in-jsx-scope
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                {/* eslint-disable-next-line react/react-in-jsx-scope */}
                <input type="text"
                       name='book'
                       placeholder='search book'
                       style={{flex: '10'}}
                       value={this.state.title}
                       onChange={this.onChange}
                />
                {/* eslint-disable-next-line react/react-in-jsx-scope */}
                <input
                    type="submit"
                    value='search'
                    className='Btn'
                    style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddBook;