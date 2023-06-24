import React from 'react';
import peoples from '../data/got.json';
import '../styles/index.css';

class People extends React.Component {
  constructor() {
    super();
  }
  render() {
    let allPeople = peoples.reduce((acc, cv) => {
      acc = acc.concat(cv.people);
      return acc;
    }, []);
    return (
      <ul className="peoples">
        {allPeople.map((people) => {
          return (
            <li>
              <h3 className="people-title">{people.name}</h3>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default People;
