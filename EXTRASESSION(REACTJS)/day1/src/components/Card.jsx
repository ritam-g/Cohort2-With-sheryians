import React from 'react';

function Card({ details }) {
    return (

        <main className="container">
            {details.map((item, index) => (
                <div key={index} className="card">
                    <div className="image-container">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="content">
                        <span className="location-tag">{item.location}</span>
                        <h2>{item.name}</h2>
                        <p className="occupation">{item.occupation}</p>

                        <div className="stats">
                            <div className="stat-box">
                                <span className="label">Age</span>
                                <span className="value">{item.age}</span>
                            </div>
                            <div className="stat-box">
                                <span className="label">Status</span>
                                <span className="value">Active</span>
                            </div>
                        </div>

                        <button className="btn">View Profile</button>
                    </div>
                </div>
            ))}
        </main>
    );
}

export default Card;