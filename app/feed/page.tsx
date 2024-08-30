import FeedGridView from "@/components/feed-grid/FeedGridView";
import { exampleGist } from "@/utils";
import React from "react";

const Feed = () => {
    const gist_items = Array(25).fill(exampleGist);

    return (
        <div className="mx-6 sm:w-3/4 sm:mx-auto">
            <h1 className="my-2 text-2xl sm:text-3xl md:text-4xl font-semibold">Welcome, anon!</h1>
            <p className="text-md sm:text-xl mb-2">What do you want to read today ?</p>
            {/* Filter section */}
            <FeedGridView items={gist_items} />
        </div>
    )
}

export default Feed;