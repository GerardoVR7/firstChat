import React from 'react'
import css from '../assets/css/app.css'


class Left extends React.Component {



    render() {
        return(
                <section id="section-left">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Gerardo</li>
                        <li className="list-group-item">Bret</li>
                        <li className="list-group-item">Israel</li>
                        <li className="list-group-item">Mario</li>
                        <li className="list-group-item">Andres</li>
                    </ul>
                </section>
        )
    }
}

export default Left;