import {TiStarFullOutline} from "react-icons/ti";

const StarRating = ({value = 5}) => (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
        {Array.from({length: 5}).map((_, i) => (
            <TiStarFullOutline key={i} />
        ))}
    </div>
);

export default StarRating;