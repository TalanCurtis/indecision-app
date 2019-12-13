console.log('app is running');

const app = {
  title: "Indecision App",
  subtitle: "Leave your life in the hands of a computer.",
  options: ['one', 'two']
}

const template =(
  <div>
    { app.title ? <h1> {app.title}</h1>: null}
    { app.subtitle && <p> {app.subtitle}</p>}
    <p>{ app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
  </div>
);

const user = {
  name: 'Josh',
  age: 24,
  location: 'Riverside',
}

function getLocation(location) {
  if (location){
    return <p>location: {user.location}</p>;
  } 
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name: 'Anonymous'}</h1>
    { user.age && user.age >=18 && <p>Age: {user.age}</p>}
    { getLocation(user.location) }
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);