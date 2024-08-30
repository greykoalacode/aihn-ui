import { Gist } from "@/utils";
import React from "react";
import Card from "../card/Card";

type FeedProps = {
    items: Gist[]
}

const FeedGridView:React.FC<FeedProps> = ({items})=> {
    return (
        <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4">
            {
                items.map(eachItem => 
                    <Card gist={eachItem} key={`card-${eachItem.id}`} />
                )
            }
        </div>
    )
}

export default FeedGridView;