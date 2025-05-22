import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePublicationDetails } from "../../shared/hooks/usePublicationDetails";
import { LoadingSpinner } from "../../LoadingSpinner";
import { PublicationDescription } from "./PublicationDescription";
import { CommentForm } from "./CommentForm";
import { anadirComentario } from "../../servicios";

export const PublicationView = ({ fetchPublications }) => {
    const { id } = useParams();
    const { isLoading, publication, error, getPublicationDetails } = usePublicationDetails();

    useEffect(() => {
        if (id) getPublicationDetails(id);
    }, [id]);

    if (isLoading) return <LoadingSpinner />;
    if (error) return <p>Error: {error}</p>;
    if (!publication) return <p>No se encontró la publicación</p>;

    const handleCommentSubmit = async (comentario) => {
        const res = await anadirComentario(publication._id, comentario);
        if (!res.error) {
            await getPublicationDetails(publication._id);
            if (fetchPublications) fetchPublications();
        }
    };

    return (
 <div className="flex flex-col gap-10 max-w-3xl mx-auto bg-gradient-to-br from-blue-50 via-green-50 to-purple-100 rounded-3xl shadow-xl p-10 mt-10">
    <div>
        <PublicationDescription publication={publication} />
    </div>
    <div>
        <h2 className="text-2xl font-bold mb-6 text-purple-700">Deja un comentario</h2>
        <CommentForm onSubmit={handleCommentSubmit} />
    </div>
</div>
    );
};
