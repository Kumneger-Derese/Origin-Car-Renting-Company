import StarRating from "./StarRating.jsx";

const TestimonialCard = ({ t }) => {
    if (!t) return <div className="invisible rounded-2xl p-6" />; // ghost to keep grid even

    return (
        <article className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
            <StarRating value={t.stars} />
            <p className="mt-4 text-sm leading-6 text-black/70">{t.q1}</p>
            <p className="mt-3 text-sm leading-6 text-black/70">{t.q2}</p>
            <div className="mt-6">
                <p className="font-medium text-black/90">{t.name}</p>
                <p className="text-sm text-black/50">{t.role}</p>
            </div>
        </article>
    );
};

export default TestimonialCard;