import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const Publications = ({ publications }) => {
    const navigate = useNavigate();

    const navigateToPublication = (id) => {
        navigate(`/publicacion/${id}`);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 py-8 px-2 bg-gradient-to-br from-green-50 via-blue-50 to-purple-100">
            {publications.map((pub ) => {

                return (
                    <div
                        key={pub._id}
                        className="cursor-pointer border-0 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 p-6 bg-gradient-to-tr from-purple-200 via-blue-100 to-green-100"
                        onClick={() => navigateToPublication(pub._id)}
                    >
                        <h2 className="font-bold text-xl mb-3 text-purple-700 tracking-wide">{pub.titulo}</h2>
                        <p className="text-base text-blue-700 mb-1">Curso: <span className="font-medium text-green-700">{pub.curso}</span></p>
                    </div>
                );
            })}
        </div>
    );
};

Publications.propTypes = {
    publications: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            titulo: PropTypes.string.isRequired,
            curso: PropTypes.string.isRequired
        })
    ).isRequired,
};
