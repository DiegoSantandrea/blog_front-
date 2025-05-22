import { useState } from "react";
import PropTypes from "prop-types";

export const Navbar = ({ onFilter }) => {
    const [curso, setcurso] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter({ curso });
    };

    return (
        <nav className="bg-gradient-to-r from-purple-200 via-blue-100 to-green-100 shadow-md py-6 px-2">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-3xl mx-auto">
                <input
                    type="text"
                    placeholder="Buscar por curso..."
                    value={curso}
                    onChange={(e) => setcurso(e.target.value)}
                    className="border-0 rounded-lg px-5 py-3 bg-white shadow focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700 w-full sm:w-64 transition"
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-8 py-3 rounded-lg font-semibold shadow hover:from-green-500 hover:to-blue-500 transition"
                >
                    Filtrar
                </button>
            </form>
        </nav>
    );
};

Navbar.propTypes = {
    onFilter: PropTypes.func.isRequired,
};
