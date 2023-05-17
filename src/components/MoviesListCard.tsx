import React from 'react';

interface MoviesListCardProps {
    movie: any; // Тут потрібно визначити тип даних для фільму
}

const MoviesListCard: React.FC<MoviesListCardProps> = ({ movie }) => {
    return <div>MoviesListCard Component</div>;
};

export default MoviesListCard;
