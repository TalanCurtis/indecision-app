console.log('running build-it-visible');

const appRoot = document.getElementById('app');

const app = {
  isVisible: false
}

const onDetailsToggle = () => {
  console.log("onDetailsToggle");
  app.isVisible = !app.isVisible;
  renderApp();
}

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onDetailsToggle}>{app.isVisible? "Hide" : "Show" } Details</button>
      {app.isVisible && <p>These are the details that hide.</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderApp();