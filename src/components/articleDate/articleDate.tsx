import React from "react";

export default function ArticleDate({ item }) {

    const date = item.publishedAt;
    const formatDate = date.replace('T', ' ');
    const formatTime = formatDate.replace('Z', '');

    return (
        <small>Published at: {formatTime}</small>
    )
}