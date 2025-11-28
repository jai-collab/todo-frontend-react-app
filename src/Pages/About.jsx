const About = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">About Task Manager</h1>
        <p className="text-gray-600 mb-4">
          This application helps you manage your tasks effectively with features like:
        </p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Create, Read, Update, and Delete tasks</li>
          <li>Mark tasks as complete</li>
          <li>Organize your workflow</li>
        </ul>
      </div>
    );
  };
  
  export default About;