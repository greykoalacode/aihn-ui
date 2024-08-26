import { Gist } from "@/utils";
import React from "react";

type FilterProps = {
    items: Gist[]
    onSelectCategory: (category: string) => void
    onSelectThemes: (theme: string) => void
}

// TODO: Instead of manually finding the unique theme & category, can we fetch it from the db itself
const getUniqueEntries = (items: Gist[], prop: string) => {
     let entries = [];
     for(let item of items){
        // let uniqueEntries = item.filter()
     }
}

const Filter: React.FC<FilterProps> = ({items, onSelectCategory, onSelectThemes}) => {
    let themes = [];
    let categories = [];

    return (
        <div>

        </div>
    )
};

export default Filter;