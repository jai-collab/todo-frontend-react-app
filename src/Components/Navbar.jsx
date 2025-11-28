import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Task Manager</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/tasks" className="hover:underline">Tasks</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;