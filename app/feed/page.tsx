import FeedGridView from "@/components/feed-grid/FeedGridView";
import { exampleGist } from "@/utils";
import React from "react";

const Feed = () => {
    const gist_items = Array(30).fill(exampleGist);

    return (
        <div className="w-3/4 mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold">Welcome, anon!</h1>
            <p className="text-xl py-2">What do you want to read today ?</p>
            {/* Filter section */}
            <FeedGridView items={gist_items} />
        </div>
    )
}

export default Feed;