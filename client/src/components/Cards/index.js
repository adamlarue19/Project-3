export default function Cards ({ workout }) {
    return (
      <div className="container">
        <h1>Random Users:</h1>
        <ul className="list-group">
          {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
          {workout.map((workout, user) => (
            <li className="list-group-item" key={user.login.uuid}>
              {`${workout.exercise}`}
            </li>
          ))}
        </ul>
      </div>
    )};